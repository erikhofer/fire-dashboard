import React from 'react'
import { Entity, Asset } from '../store/model'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { useAssets } from '../hooks/useAssets'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'

const columns: ColumnsType<Asset> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string, record: Entity) => (
      <Link to={`/assets/${record.id}`}>{text}</Link>
    )
  },
  {
    title: 'Value',
    dataIndex: 'currentValue',
    align: 'right'
  }
]

export const Assets: React.FC = () => {
  const assets = useAssets()

  return (
    <>
      <PageHeader title="Assets" />
      <PageContent>
        <p>
          <Link to="/assets/create">
            <Button
              block
              type={assets.length === 0 ? 'primary' : 'dashed'}
              icon={<PlusOutlined />}
            >
              Add Asset
            </Button>
          </Link>
        </p>
        <Table columns={columns} dataSource={assets} pagination={false} />
      </PageContent>
    </>
  )
}
