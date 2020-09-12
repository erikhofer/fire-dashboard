import React from 'react'
import { Expense } from '../store/model'
import { Button, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'
import { Currency } from '../components/Currency'
import { useExpenses } from '../hooks/useExpenses'

const columns: ColumnsType<Expense> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string, expense: Expense) => (
      <Link to={`/expenses/${expense.id}`}>{text}</Link>
    )
  },
  {
    title: 'Amount (monthly)',
    dataIndex: 'amount',
    render: (value: number) => <Currency amount={value} />
  },
  {
    title: '',
    dataIndex: 'isFixed',
    render: (isFixed: boolean) =>
      isFixed && <Tag color="orange">Fixed Expense</Tag>
  }
]

export const Expenses: React.FC = () => {
  const expenses = useExpenses()

  return (
    <>
      <PageHeader
        title="Expenses"
        extra={[
          <Link key="1" to="/expenses/create">
            <Button type="primary" icon={<PlusOutlined />}>
              Add Expense
            </Button>
          </Link>
        ]}
      />
      <PageContent>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={expenses}
          pagination={false}
        />
      </PageContent>
    </>
  )
}
