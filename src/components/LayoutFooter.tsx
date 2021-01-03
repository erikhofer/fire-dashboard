import React from 'react'
import { Layout, Divider } from 'antd'
import { Link } from 'react-router-dom'

const { Footer } = Layout

export const LayoutFooter: React.FC = () => (
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
)
