import React from 'react'
import { Card, Progress, Statistic, Row, Col, Space } from 'antd'
import { useNetWorth } from '../../hooks/metrics/useNetWorth'
import { useGoals } from '../../hooks/useGoals'
import { useTotalExpenses } from '../../hooks/metrics/useTotalExpenses'
import { Percent } from '../../components/Percent'

export const FinancialIndependence: React.FC = () => {
  // TODO Handle netWorth <= 0 !!!

  const goals = useGoals()
  const netWorth = useNetWorth()
  const { totalExpenses, totalFixedExpenses } = useTotalExpenses()
  const totalExpensesToNetWorthRatio = totalExpenses / netWorth
  const totalFixedExpensesToNetWorthRatio = totalFixedExpenses / netWorth
  const netWorthNeededToCoverTotalExpenses =
    totalExpenses / goals.expensesToNetWorthRatio
  const netWorthNeededToCoverTotalFixedExpenses =
    totalFixedExpenses / goals.expensesToNetWorthRatio

  return (
    <Card title="Financial Independence" extra={goals.expensesToNetWorthRatio}>
      <Row justify="space-around" align="middle">
        <Col span={10}>
          <Space direction="vertical">
            <Statistic
              title="Fixed Expenses"
              value={totalFixedExpenses}
              suffix={<Percent ratio={totalFixedExpensesToNetWorthRatio} />}
            />
            <Statistic
              title="Total Expenses"
              value={totalExpenses}
              suffix={<Percent ratio={totalExpensesToNetWorthRatio} />}
            />
          </Space>
        </Col>
        <Col span={10}>
          <Progress
            type="circle"
            percent={(netWorth / netWorthNeededToCoverTotalFixedExpenses) * 100}
            success={{
              percent: (netWorth / netWorthNeededToCoverTotalExpenses) * 100
            }}
          />
        </Col>
      </Row>
    </Card>
  )
}
