import React from 'react'
import './App.css'
import { MainLayout } from './components/MainLayout'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <MainLayout>
      <Dashboard></Dashboard>
    </MainLayout>
  )
}

export default App
