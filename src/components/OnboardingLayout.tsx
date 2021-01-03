import { Card, Layout } from 'antd'
import React from 'react'
import { LayoutFooter } from './LayoutFooter'
import { Steps } from 'antd'
import { useAuth } from '../auth/auth'
import { useHistory, useRouteMatch } from 'react-router-dom'

const { Step } = Steps

const { Content } = Layout

const stepPaths = ['/login', '/projects']

export const OnboardingLayout: React.FC = ({ children }) => {
  const routeMatch = useRouteMatch()
  const history = useHistory()
  const { isLoggedIn } = useAuth().session.info

  const currentStep = stepPaths.indexOf(routeMatch.path)
  const onStepChange = (step: number) => history.replace(stepPaths[step])
  const getStatus = (step: number) =>
    step < currentStep ? 'finish' : 'process'

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Card style={{ width: '80%' }}>
          <Steps
            type="navigation"
            current={currentStep}
            onChange={onStepChange}
            className="site-navigation-steps"
          >
            <Step status={getStatus(0)} title="Log In" />
            <Step
              status={isLoggedIn ? getStatus(1) : 'wait'}
              title="Select Project"
              disabled={!isLoggedIn}
            />
          </Steps>
          <div style={{ height: 32 }}></div>
          {children}
        </Card>
      </Content>
      <LayoutFooter />
    </Layout>
  )
}
