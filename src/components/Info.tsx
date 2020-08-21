import { Tooltip } from 'antd'
import React from 'react'
import { InfoCircleFilled } from '@ant-design/icons'

export const Info: React.FC = ({ children }) => (
  <Tooltip title={children}>
    <InfoCircleFilled />
  </Tooltip>
)
