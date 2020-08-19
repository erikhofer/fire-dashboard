import React from 'react'
import { Card, Progress, Statistic, Row, Col, Space } from 'antd'
import { useCurrency } from '../../hooks/useCurrency'
import Countdown from 'antd/lib/statistic/Countdown'
import moment from 'moment'
import { useNetWorth } from '../../hooks/useNetWorth'

export const DebtFree: React.FC = () => {
  const currency = useCurrency()
  const netWorth = useNetWorth()

  return (
    <Card title="Debt Free">
      <Row justify="space-around" align="middle">
        <Col span={10}>
          <Space direction="vertical">
            <Statistic
              title="Net Worth"
              value={netWorth}
              suffix={currency.symbol}
            />
            <Countdown
              title="Time to go"
              value={moment().add(2, 'hours').valueOf()}
            />
          </Space>
        </Col>
        <Col span={10}>
          <Progress type="circle" percent={100} status="exception" />
        </Col>
      </Row>
    </Card>
  )
}
