import React, { useState } from 'react'
import { Layout, Menu, Divider } from 'antd'
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

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div
          style={{
            height: 32,
            background: 'rgba(255, 255, 255, 0.2)',
            margin: 16
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={[location.pathname]}
          mode="inline"
        >
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
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            background: '#fff'
          }}
        />
        <Content style={{ marginTop: 64 }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          FIRE Dashboard 0.0.0 <Divider type="vertical" /> About{' '}
          <Divider type="vertical" /> Made with ❤ by the open-source community
        </Footer>
      </Layout>
    </Layout>
  )
}
