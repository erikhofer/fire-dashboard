import React from 'react'
import './App.css'
import { MainLayout } from './components/MainLayout'
import { Dashboard } from './pages/Dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Assets } from './pages/Assets'
import { AssetDetails } from './pages/AssetDetails'
import { Result } from 'antd'
import { Liabilities } from './pages/Liabilities'
import { LiabilityDetails } from './pages/LiabilityDetails'
import { Incomes } from './pages/Incomes'
import { IncomeDetails } from './pages/IncomeDetails'
import { Expenses } from './pages/Expenses'
import { Settings } from './pages/Settings'
import { About } from './pages/About'
import { useAuth } from './services/auth'
import { Login } from './pages/Login'
import { Projects } from './pages/Projects'
import { useProject } from './services/project'

function App() {
  const { isLoggedIn } = useAuth()
  const { project } = useProject()

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {isLoggedIn ? null : <Redirect to="/login" />}
        <Route>
          <MainLayout>
            <Switch>
              <Route path="/projects" component={Projects} />
              {project ? null : <Redirect to="/projects" />}
              <Route path="/" exact component={Dashboard} />
              <Route path="/assets/:id" component={AssetDetails} />
              <Route path="/assets" component={Assets} />
              <Route path="/liabilities/:id" component={LiabilityDetails} />
              <Route path="/liabilities" component={Liabilities} />
              <Route path="/incomes/:id" component={IncomeDetails} />
              <Route path="/incomes" component={Incomes} />
              <Route path="/expenses" component={Expenses} />
              <Route path="/settings" component={Settings} />
              <Route path="/about" component={About} />
              <Route>
                <Result status="404" title="Page not found" />
              </Route>
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
