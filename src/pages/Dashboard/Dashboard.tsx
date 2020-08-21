import React from 'react'
import { PageHeader } from '../../components/PageHeader'
import { PageContent } from '../../components/PageContent'
import { Row, Col, Card } from 'antd'
import { EmergencyFund } from './EmergencyFund'
import { DebtFree } from './DebtFree'
import { FinancialIndependence } from './FinancialIndependence'
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
          <Col span={6}>
            <EmergencyFund />
          </Col>
          <Col span={6}>
            <DebtFree />
          </Col>
          <Col span={6}>
            <FinancialIndependence />
          </Col>
          <Col span={6}>
            <Card title="Passive Income">TODO</Card>
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
            <Card title="Net Worth">TODO</Card>
          </Col>
          <Col span={12}>
            <Card title="Asset Allocation">TODO</Card>
          </Col>
        </Row>
      </PageContent>
    </>
  )
}
