import React from 'react'
import { Page } from '../components/Page'
import { Entity } from '../store/model'
import { Button, Table, Space } from 'antd'
import { Link } from 'react-router-dom'
import { useAssets } from '../hooks/useAssets'
import { PlusOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: Entity) => (
      <Link to={`/assets/${record.id}`}>{text}</Link>
    )
  },
  {
    title: 'Value',
    dataIndex: 'currentValue',
    key: 'currentValue'
  }
]

export const Assets: React.FC = () => {
  const assets = useAssets()

  return (
    <Page title="Assets">
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
    </Page>
  )
}
