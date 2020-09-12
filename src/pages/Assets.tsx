import React from 'react'
import { Asset } from '../store/model'
import { Button, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { useAssets } from '../hooks/useAssets'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'
import { Currency } from '../components/Currency'

const columns: ColumnsType<Asset> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string, asset: Asset) => (
      <Link to={`/assets/${asset.id}`}>{text}</Link>
    )
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    render: (value: number) => <Currency amount={value} />
  },
  { title: 'Asset Class', dataIndex: 'class' },
  {
    title: '',
    dataIndex: 'isEmergencyFund',
    render: (isEmergencyFund: boolean) =>
      isEmergencyFund && <Tag color="green">Emergency Fund</Tag>
  }
]

export const Assets: React.FC = () => {
  const assets = useAssets()

  return (
    <>
      <PageHeader
        title="Assets"
        extra={[
          <Link key="1" to="/assets/create">
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
          dataSource={assets}
          pagination={false}
        />
      </PageContent>
    </>
  )
}
