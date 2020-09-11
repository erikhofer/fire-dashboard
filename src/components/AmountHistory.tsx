import React from 'react'
import { HistoryItem } from '../store/model'
import { Table, Card } from 'antd'
import { renderDate } from '../utils/date'
import { ColumnsType } from 'antd/lib/table'
import { Currency } from './Currency'

const columns: ColumnsType<HistoryItem> = [
  {
    title: 'Amount',
    dataIndex: 'amount',
    render: (value: number) => <Currency amount={value} />
  },
  {
    title: 'Date',
    dataIndex: 'date',
    render: renderDate
  }
]

export const ValueHistory: React.FC<{ history?: HistoryItem[] }> = props => {
  return (
    <Card title="History" className="no-padding">
      <Table
        rowKey="date"
        columns={columns}
        dataSource={props.history}
        pagination={{ hideOnSinglePage: true }}
      />
    </Card>
  )
}
