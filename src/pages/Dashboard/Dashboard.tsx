import React from 'react'
import { PageHeader } from '../../components/PageHeader'
import { PageContent } from '../../components/PageContent'
import { Row, Col, Card } from 'antd'
import { Goals } from './Goals'

export const Dashboard: React.FC = () => {
  return (
    <>
      <PageHeader title="Dashboard" />
      <PageContent>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <Col span={12}>
            <Goals />
          </Col>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <Col span={12}>
            <Card title="Income">TODO</Card>
          </Col>
          <Col span={12}>
            <Card title="Cash Flow">TODO</Card>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <Card title="Net Worth">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'lightgray',
                  height: 300
                }}
              >
                <span>Chart</span>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Asset Allocation">TODO</Card>
          </Col>
        </Row>
      </PageContent>
    </>
  )
}
