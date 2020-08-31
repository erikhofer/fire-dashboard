import React from 'react'
import { PageHeader } from '../../components/PageHeader'
import { PageContent } from '../../components/PageContent'
import { Row, Col } from 'antd'
import { Goals } from './Goals'
import { CashFlow } from './CashFlow'
import { Balance } from './Balance'
import { AssetAllocation } from './AssetAllocation'

export const Dashboard: React.FC = () => {
  return (
    <>
      <PageHeader title="Dashboard" />
      <PageContent>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <Col span={12}>
            <Goals />
          </Col>
          <Col span={12}>
            <CashFlow />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <Balance />
          </Col>
          <Col span={12}>
            <AssetAllocation />
          </Col>
        </Row>
      </PageContent>
    </>
  )
}
