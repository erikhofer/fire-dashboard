import React from 'react'
import { Card, Space, Row, Col, Statistic } from 'antd'
import { useCurrency } from '../../hooks/useCurrency'
import { useNetWorth } from '../../hooks/metrics/useNetWorth'
import { useTotalAssets } from '../../hooks/metrics/useTotalAssets'
import { useTotalLiablities } from '../../hooks/metrics/useTotalLiabilities'
import { useTotalEmergencyFund } from '../../hooks/metrics/useTotalEmergencyFund'

export const Balance: React.FC = () => {
  const currency = useCurrency()
  const netWorth = useNetWorth()
  const totalAssets = useTotalAssets()
  const totalLiabilities = useTotalLiablities()
  const totalEmergencyFund = useTotalEmergencyFund()
  return (
    <Card title="Balance">
      <Space direction="vertical" style={{ width: '100%' }}>
        <Row gutter={8}>
          <Col span={6}>
            <Statistic title="Net Worth" value={currency.format(netWorth)} />
          </Col>
          <Col span={6}>
            <Statistic
              title="Total Assets"
              value={currency.format(totalAssets)}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Total Liabilities"
              value={currency.format(totalLiabilities)}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Emergency Fund"
              value={currency.format(totalEmergencyFund)}
            />
          </Col>
        </Row>
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
      </Space>
    </Card>
  )
}
