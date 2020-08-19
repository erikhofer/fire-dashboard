import React from 'react'
import { Card, Progress, Statistic, Row, Col, Space } from 'antd'
import { useAssets } from '../../hooks/useAssets'
import { useGoals } from '../../hooks/useGoals'

export const EmergencyFund: React.FC = () => {
  const assets = useAssets()
  const goals = useGoals()
  const total = assets
    .filter(a => a.isEmergencyFund)
    .reduce((sum, curr) => sum + curr.currentValue, 0)
  const percent = (total / goals.emergencyFund) * 100

  return (
    <Card title="Emergency Fund">
      <Row justify="space-around" align="middle">
        <Col span={10}>
          <Space direction="vertical">
            <Statistic title="Current Amount" value={total} />
            <Statistic title="Goal Amount" value={goals.emergencyFund} />
          </Space>
        </Col>
        <Col span={10}>
          <Progress type="circle" percent={percent} />
        </Col>
      </Row>
    </Card>
  )
}
