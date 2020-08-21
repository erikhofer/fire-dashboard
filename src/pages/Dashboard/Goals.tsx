import React, { useState } from 'react'
import { Card, Table, Radio } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { GoalProgress } from '../../hooks/progress/goal-progress'
import { useEmergencyFundProgress } from '../../hooks/progress/useEmergencyFundProgress'
import moment from 'moment'
import { useTargetValue } from '../../hooks/useTargetValue'
import { useNetWorthProgress } from '../../hooks/progress/useNetWorthProgress'
import { usePassiveIncomeProgress } from '../../hooks/progress/usePassiveIncomeProgress'
import { useCashFlowProgress } from '../../hooks/progress/useCashFlowProgress'

interface GoalRow extends GoalProgress {
  key: number
  metric: string
  metricRowSpan: number
}

function makeRows(
  metric: string,
  progresses: GoalProgress[]
): Omit<GoalRow, 'key'>[] {
  return progresses.map((progress, index) => ({
    ...progress,
    metric,
    metricRowSpan: index === 0 ? progresses.length : 0
  }))
}

const columns = (showEta: boolean): ColumnsType<GoalRow> => [
  {
    title: 'Metric',
    dataIndex: 'metric',
    render: (value, row) => {
      return {
        children: value,
        props: {
          rowSpan: row.metricRowSpan
        }
      }
    }
  },
  {
    title: 'Target',
    dataIndex: 'target'
  },
  showEta
    ? {
        title: 'ETA',
        dataIndex: 'monthsToEta',
        render: (monthsToEta: number) =>
          monthsToEta ? moment().add(monthsToEta, 'months').fromNow() : '',
        width: '50%'
      }
    : {
        title: 'Progress',
        dataIndex: 'progress',
        width: '50%'
      }
]

export const Goals: React.FC = () => {
  const [showEta, setShowEta] = useState(false)

  const rows: GoalRow[] = [
    ...makeRows('Cash Flow', useCashFlowProgress()),
    ...makeRows('Emergency Fund', useEmergencyFundProgress()),
    ...makeRows('Net Worth', useNetWorthProgress()),
    ...makeRows('Passive Income', usePassiveIncomeProgress())
  ].map((row, index) => ({ ...row, key: index }))

  return (
    <Card
      title="Goals"
      className="no-padding"
      extra={
        <Radio.Group
          options={[
            { label: 'Progress', value: false },
            { label: 'ETA', value: true }
          ]}
          onChange={useTargetValue(setShowEta) as any}
          optionType="button"
          value={showEta}
        />
      }
    >
      <Table columns={columns(showEta)} dataSource={rows} pagination={false} />
    </Card>
  )
}
