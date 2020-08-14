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
      <>
        <Link to={`/assets/${asset.id}`}>{text}</Link>{' '}
        {asset.isEmergencyFund && <Tag color="green">Emergency Fund</Tag>}
      </>
    )
  },
  {
    title: 'Value',
    dataIndex: 'currentValue',
    align: 'right',
    render: (value: number) => <Currency amount={value} />
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
