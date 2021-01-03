import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Input, Result, Skeleton, Space } from 'antd'
import React from 'react'
import { useAuth } from '../auth/auth'
import { OnboardingLayout } from '../components/OnboardingLayout'
import { useUserDetails } from '../hooks/useUserDetails'
import { formStyles } from '../utils/form'

export const Login: React.FC = () => {
  const [form] = Form.useForm()
  const auth = useAuth()

  const login = ({ identityProvider }: any) => auth.login(identityProvider)

  return (
    <OnboardingLayout>
      {auth.session.info.isLoggedIn ? (
        <UserDetails />
      ) : (
        <Form
          {...formStyles.layout}
          form={form}
          name="asset"
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
          <Form.Item {...formStyles.tailLayout}>
            <Button type="primary" htmlType="submit" icon={<LoginOutlined />}>
              Log In
            </Button>
          </Form.Item>
        </Form>
      )}
    </OnboardingLayout>
  )
}

const UserDetails: React.FC = () => {
  const { name, imageUrl, loading, error } = useUserDetails()
  if (loading) {
    return <Skeleton.Avatar active size={64} />
  }
  if (error) {
    return <Result status="error" title="Error" subTitle={'' + error} />
  }
  const avatarProps = imageUrl
    ? { src: imageUrl }
    : name
    ? { children: initials(name) }
    : { icon: <UserOutlined /> }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Space>
        <Avatar size={64} {...avatarProps} />{' '}
        <span style={{ fontSize: 28 }}>{name}</span>
      </Space>
    </div>
  )
}

const initials = (name: string) =>
  name
    .split(' ')
    .map(s => s[0])
    .join()
