import React from 'react'
import { Income } from '../store/model'
import { Button, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'
import { Currency } from '../components/Currency'
import { useIncomes } from '../hooks/useIncomes'

const columns: ColumnsType<Income> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string, income: Income) => (
      <Link to={`/incomes/${income.id}`}>{text}</Link>
    )
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    render: (value: number) => <Currency amount={value} />
  },
  {
    title: '',
    dataIndex: 'isPassive',
    render: (isPassive: boolean) =>
      isPassive && <Tag color="green">Passive Income</Tag>
  }
]

export const Incomes: React.FC = () => {
  const incomes = useIncomes()

  return (
    <>
      <PageHeader
        title="Income"
        extra={[
          <Link key="1" to="/incomes/create">
            <Button type="primary" icon={<PlusOutlined />}>
              Add Asset
            </Button>
          </Link>
        ]}
      />
      <PageContent>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={incomes}
          pagination={false}
        />
      </PageContent>
    </>
  )
}
