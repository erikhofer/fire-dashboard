import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'
import { Row, Col, Card } from 'antd'

export const Dashboard: React.FC = () => {
  return (
    <>
      <PageHeader title="Dashboard" />
      <PageContent>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <Col span={6}>
            <Card title="Emergency Fund">TODO</Card>
          </Col>
          <Col span={6}>
            <Card title="Debt Free">TODO</Card>
          </Col>
          <Col span={6}>
            <Card title="Financial Independence">TODO</Card>
          </Col>
          <Col span={6}>
            <Card title="Passive Income">TODO</Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <Col span={12}>
            <Card title="Net Worth">TODO</Card>
          </Col>
          <Col span={12}>
            <Card title="Income">TODO</Card>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <Card title="Asset Allocation">TODO</Card>
          </Col>
        </Row>
      </PageContent>
    </>
  )
}
