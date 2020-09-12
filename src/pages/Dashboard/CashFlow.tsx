import React from 'react'
import { Card, Statistic, Row, Col, Space } from 'antd'
import { useCurrency } from '../../hooks/useCurrency'
import { useCashFlow } from '../../hooks/metrics/useCashFlow'
import { useTotalIncome } from '../../hooks/metrics/useTotalIncome'
import { useTotalExpenses } from '../../hooks/metrics/useTotalExpenses'
import { useNetWorth } from '../../hooks/metrics/useNetWorth'
import { formatPercent } from '../../utils/format'

export const CashFlow: React.FC = () => {
  const currency = useCurrency()
  const cashFlow = useCashFlow()
  const { totalIncome, totalPassiveIncome } = useTotalIncome()
  const { totalExpenses, totalFixedExpenses } = useTotalExpenses()
  const netWorth = useNetWorth()
  return (
    <Card title="Cash Flow">
      <Space direction="vertical" style={{ width: '100%' }}>
        <Row gutter={8}>
          <Col span={6}>
            <Statistic title="Cash Flow" value={currency.format(cashFlow)} />
          </Col>
          <Col span={6}>
            <Statistic
              title="Total Income"
              value={currency.format(totalIncome)}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Active Income"
              value={currency.format(totalIncome - totalPassiveIncome)}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Passive Income"
              value={currency.format(totalPassiveIncome)}
            />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={6}>
            <Statistic
              title="Total Expenses"
              value={currency.format(totalExpenses)}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Total Expenses % of NW"
              value={
                netWorth > 0
                  ? formatPercent((totalExpenses * 12) / netWorth)
                  : 'N/A'
              }
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Fixed Expenses"
              value={currency.format(totalFixedExpenses)}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Fixed Expenses % of NW"
              value={
                netWorth > 0
                  ? formatPercent((totalFixedExpenses * 12) / netWorth)
                  : 'N/A'
              }
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
