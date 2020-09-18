import React, { useState, useEffect } from 'react'
import { PageContent } from '../components/PageContent'
import { PageHeader } from '../components/PageHeader'
import Table, { ColumnsType } from 'antd/lib/table'
import { Button } from 'antd'
import { BugOutlined } from '@ant-design/icons'

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
      <PageHeader title="About" />
      <PageContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 16
          }}
        >
          <img
            alt="Logo"
            src={`${process.env.PUBLIC_URL}/logo512.png`}
            style={{ width: 300, marginRight: 32 }}
          />
          <div>
            <h2>FIRE Dashboard</h2>
            <p>
              Version: 0.0.0
              <br />
              License:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/erikhofer/fire-dashboard/blob/master/LICENSE"
              >
                AGPL-3.0
              </a>
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/erikhofer/fire-dashboard/issues"
            >
              <Button icon={<BugOutlined />}>Report Issue</Button>
            </a>
          </div>
        </div>
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
