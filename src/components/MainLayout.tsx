import React, { useState } from 'react'
import { Layout, Menu, Divider } from 'antd'
import {
  DashboardOutlined,
  SettingOutlined,
  FlagOutlined
} from '@ant-design/icons'
import { LiabilityIcon, AssetIcon, IncomeIcon, ExpenseIcon } from './Icons'

const { Header, Content, Footer, Sider } = Layout

export const MainLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

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
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="/" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/assets" icon={<AssetIcon />}>
            Assets
          </Menu.Item>
          <Menu.Item key="/liabilities" icon={<LiabilityIcon />}>
            Liabilities
          </Menu.Item>
          <Menu.Item key="/incomes" icon={<IncomeIcon />}>
            Income
          </Menu.Item>
          <Menu.Item key="/expenses" icon={<ExpenseIcon />}>
            Expenses
          </Menu.Item>
          <Menu.Item key="/goals" icon={<FlagOutlined />}>
            Goals
          </Menu.Item>
          <Menu.Item key="/settings" icon={<SettingOutlined />}>
            Settings
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
