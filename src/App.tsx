import React from 'react'
import './App.css'
import { MainLayout } from './components/MainLayout'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Assets } from './pages/Assets'
import { AssetDetails } from './pages/AssetDetails'
import { Result } from 'antd'
import { Liabilities } from './pages/Liabilities'
import { LiabilityDetails } from './pages/LiabilityDetails'
import { Incomes } from './pages/Incomes'
import { IncomeDetails } from './pages/IncomeDetails'
import { Expenses } from './pages/Expenses'

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/assets/:id" component={AssetDetails} />
          <Route path="/assets" component={Assets} />
          <Route path="/liabilities/:id" component={LiabilityDetails} />
          <Route path="/liabilities" component={Liabilities} />
          <Route path="/incomes/:id" component={IncomeDetails} />
          <Route path="/incomes" component={Incomes} />
          <Route path="/expenses" component={Expenses} />
          <Route>
            <Result status="404" title="Page not found" />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default App
