import React from 'react'
import { Liability } from '../store/model'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'
import { Currency } from '../components/Currency'
import { useLiabilities } from '../hooks/useLiabilities'

const columns: ColumnsType<Liability> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string, liability: Liability) => (
      <Link to={`/liabilities/${liability.id}`}>{text}</Link>
    )
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    render: (value: number) => <Currency amount={value} />
  }
]

export const Liabilities: React.FC = () => {
  const liabilities = useLiabilities()

  return (
    <>
      <PageHeader
        title="Liabilities"
        extra={[
          <Link key="1" to="/liabilities/create">
            <Button type="primary" icon={<PlusOutlined />}>
              Add Liability
            </Button>
          </Link>
        ]}
      />
      <PageContent>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={liabilities}
          pagination={false}
        />
      </PageContent>
    </>
  )
}
