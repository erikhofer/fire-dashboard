import React, { useState, useEffect } from 'react'
import { PageContent } from '../components/PageContent'
import { PageHeader } from '../components/PageHeader'
import Table, { ColumnsType } from 'antd/lib/table'

const columns: ColumnsType = [
  {
    title: 'Package',
    dataIndex: 'package',
    render: (text: string, pkg: any) => (
      <a href={pkg.repository} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    )
  },
  { title: 'License', dataIndex: 'licenses' },
  { title: 'Copyright', dataIndex: 'copyright' }
]

export const About: React.FC = () => {
  const [packages, setPackages] = useState<any[]>()

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/licenses.json')
      .then(response => response.json())
      .then(setPackages)
      .catch(console.error)
  }, [])

  return (
    <>
      <PageHeader title="Settings" />
      <PageContent>
        <Table
          title={() => 'Third Party Licenses'}
          rowKey="package"
          loading={packages === undefined}
          columns={columns}
          dataSource={packages}
        />
      </PageContent>
    </>
  )
}
