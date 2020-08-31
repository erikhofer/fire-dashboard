import React from 'react'
import { Card } from 'antd'

export const AssetAllocation: React.FC = () => {
  return (
    <Card title="Asset Allocation">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightgray',
          height: 300
        }}
      >
        <span>Chart</span>
      </div>
    </Card>
  )
}
