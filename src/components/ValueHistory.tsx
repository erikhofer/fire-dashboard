import React from 'react'
import { HistoryItem } from '../store/model'
import { Table, Card } from 'antd'
import { renderDate } from '../utils/date'

const columns = [
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: renderDate
  }
]

export const ValueHistory: React.FC<{ history?: HistoryItem[] }> = props => {
  return (
    <Card title="History" className="no-padding">
      <Table
        columns={columns}
        dataSource={props.history}
        pagination={{ hideOnSinglePage: true }}
      />
    </Card>
  )
}
