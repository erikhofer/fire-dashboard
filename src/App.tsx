import React from 'react'
import './App.css'
import { MainLayout } from './components/MainLayout'
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Assets } from './pages/Assets'

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/assets" component={Assets} />
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default App
