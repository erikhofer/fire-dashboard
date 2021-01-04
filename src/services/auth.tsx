import { Session } from '@inrupt/solid-client-authn-browser'
import { Button, Result, Spin } from 'antd'
import React, { useContext, useEffect, useState } from 'react'

export interface Auth {
  webId: string
  isLoggedIn: boolean
  fetch: Session['fetch']
  login: (identityProvider: string) => Promise<void>
  logout: () => Promise<void>
}

const session = new Session()

const AuthContext = React.createContext<Auth>({} as Auth)

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    session
      .handleIncomingRedirect(window.location.href)
      .then(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spin />
  }
  if (session.info.isLoggedIn && !isWebIdValid()) {
    return (
      <Result
        status="500"
        title="Sorry, something went wrong."
        subTitle="You are logged in but you WebID is not valid 😥"
        extra={
          <Button onClick={logout} type="primary">
            Log Out
          </Button>
        }
      />
    )
  }
  return (
    <AuthContext.Provider
      value={{
        webId: session.info.webId || '',
        isLoggedIn: session.info.isLoggedIn,
        fetch: session.fetch,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function isWebIdValid() {
  if (!session.info.webId) {
    return false
  }
  try {
    new URL(session.info.webId)
  } catch {
    return false
  }
  return true
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

/** Currently logout doesn't work but the session is also not persisted, so meh */
const logout = async () => window.location.reload()
