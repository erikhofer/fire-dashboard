import React from 'react'
import { Tag } from 'antd'
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  RiseOutlined
} from '@ant-design/icons'

export const ProgressMessage: React.FC<{
  type: 'success' | 'warning' | 'in-progress'
}> = ({ type, children }) => {
  switch (type) {
    case 'success':
      return (
        <Tag icon={<CheckCircleOutlined />} color="success">
          {children}
        </Tag>
      )
    case 'warning':
      return (
        <Tag icon={<ExclamationCircleOutlined />} color="warning">
          {children}
        </Tag>
      )
    case 'in-progress':
      return (
        <Tag icon={<RiseOutlined />} color="processing">
          {children}
        </Tag>
      )
  }
}
