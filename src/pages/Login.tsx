import { LoginOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Layout } from 'antd'
import React from 'react'
import { useAuth } from '../services/auth'
import { Redirect } from 'react-router-dom'
import { LayoutFooter } from '../components/LayoutFooter'

const { Content } = Layout

export const Login: React.FC = () => {
  const [form] = Form.useForm()
  const auth = useAuth()

  const login = ({ identityProvider }: any) => auth.login(identityProvider)

  if (auth.isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Card style={{ minWidth: 300 }}>
          <Form
            form={form}
            layout="vertical"
            name="login"
            initialValues={{ identityProvider: 'https://solidcommunity.net' }}
            onFinish={login}
          >
            <Form.Item
              label="Identity Provider"
              name="identityProvider"
              rules={[
                {
                  required: true,
                  message: 'Please input an identity provider URL!'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<LoginOutlined />}>
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
      <LayoutFooter />
    </Layout>
  )
}
