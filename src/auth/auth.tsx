import { Session } from '@inrupt/solid-client-authn-browser'
import { Spin } from 'antd'
import React, { useContext, useEffect, useState } from 'react'

export interface Auth {
  session: Session
  login: (identityProvider: string) => Promise<void>
}

const session = new Session()
console.log('session', session)

const AuthContext = React.createContext<Auth>({} as Auth)

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    session
      .handleIncomingRedirect(window.location.href)
      .then(console.log)
      .then(() => setLoading(false))
  }, [])
  return loading ? (
    <Spin />
  ) : (
    <AuthContext.Provider value={{ session, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

async function login(identityProvider: string) {
  if (!session.info.isLoggedIn) {
    await session.login({
      oidcIssuer: identityProvider,
      clientName: 'FIRE Dashboard',
      redirectUrl: window.location.href
    })
  }
}
