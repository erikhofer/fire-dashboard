import React, { useState } from 'react'
import { Layout, Menu, Divider, Alert } from 'antd'
import {
  DashboardOutlined,
  SettingOutlined,
  FlagOutlined
} from '@ant-design/icons'
import { LiabilityIcon, AssetIcon, IncomeIcon, ExpenseIcon } from './Icons'
import { Link, useLocation } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

export const MainLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const basePath = '/' + location.pathname.split('/')[1]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div
          style={{
            height: 48,
            margin: 16,
            display: 'flex'
          }}
        >
          <img
            alt="Logo"
            src={`${process.env.PUBLIC_URL}/logo192.png`}
            style={{ height: '100%' }}
          />
          <div
            style={{
              color: 'white',
              fontSize: 32,
              marginLeft: 24,
              letterSpacing: 3
            }}
          >
            FIRE
          </div>
        </div>
        <Menu theme="dark" selectedKeys={[basePath]} mode="inline">
          <Menu.Item key="/" icon={<DashboardOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/assets" icon={<AssetIcon />}>
            <Link to="/assets">Assets</Link>
          </Menu.Item>
          <Menu.Item key="/liabilities" icon={<LiabilityIcon />}>
            <Link to="/liabilities">Liabilities</Link>
          </Menu.Item>
          <Menu.Item key="/incomes" icon={<IncomeIcon />}>
            <Link to="/incomes">Income</Link>
          </Menu.Item>
          <Menu.Item key="/expenses" icon={<ExpenseIcon />}>
            <Link to="/expenses">Expenses</Link>
          </Menu.Item>
          <Menu.Item key="/goals" icon={<FlagOutlined />}>
            <Link to="/goals">Goals</Link>
          </Menu.Item>
          <Menu.Item key="/settings" icon={<SettingOutlined />}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <Alert
            message="This is a demo. Data will not be saved!"
            type="warning"
            showIcon
          />
        </Header>
        <Content>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          FIRE Dashboard 0.0.0 <Divider type="vertical" />
          <Link to="/about">About</Link>
          <Divider type="vertical" /> Made with ❤ free and{' '}
          <a
            href="https://github.com/erikhofer/fire-dashboard"
            target="blank"
            rel="noopener"
          >
            open source
          </a>
        </Footer>
      </Layout>
    </Layout>
  )
}
