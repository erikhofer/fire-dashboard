import React from 'react'
import { HistoryItem } from '../store/model'
import { Table, Card } from 'antd'
import { renderDate } from '../utils/date'
import { ColumnsType } from 'antd/lib/table'

const columns: ColumnsType<HistoryItem> = [
  {
    title: 'Value',
    dataIndex: 'value',
    align: 'right'
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
        columns={columns}
        dataSource={props.history}
        pagination={{ hideOnSinglePage: true }}
      />
    </Card>
  )
}
