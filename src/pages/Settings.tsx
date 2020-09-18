import React, { useCallback } from 'react'
import { Card, Row, Col, Form, message, Space, Button, InputNumber } from 'antd'
import { PageContent } from '../components/PageContent'
import { PageHeader } from '../components/PageHeader'
import { useGoals } from '../hooks/useGoals'
import { useDispatch } from 'react-redux'
import { updateGoals } from '../store/actions'
import { positiveNumber } from '../utils/validation'
import { SaveOutlined } from '@ant-design/icons'

const formStyles = {
  layout: {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  },
  tailLayout: {
    wrapperCol: { offset: 8, span: 16 }
  }
}

export const Settings: React.FC = () => {
  const dispatch = useDispatch()
  const goals = useGoals()
  const [goalsForm] = Form.useForm()

  const saveGoals = useCallback(
    (values: any) => {
      dispatch(updateGoals(values))
      message.success('Goals updated')
    },
    [dispatch]
  )
  const resetGoals = useCallback(() => goalsForm.resetFields(), [goalsForm])

  return (
    <>
      <PageHeader title="Settings" />
      <PageContent>
        <Row style={{ marginBottom: 8 }}>
          <Col span={12}>
            <Card title="Goals">
              <Form
                {...formStyles.layout}
                form={goalsForm}
                name="goals"
                initialValues={goals}
                onFinish={saveGoals}
              >
                <Form.Item
                  label="Emergency Fund"
                  name="emergencyFund"
                  rules={[
                    { required: true, message: 'Please input a goal!' },
                    { type: 'number' },
                    { validator: positiveNumber }
                  ]}
                  extra="High liquidity, zero risk reserve for unexpected expenses or unemployment. Common ballpark is 3-6 times monthly Total Expenses."
                >
                  <InputNumber></InputNumber>
                </Form.Item>
                <Form.Item
                  label="Expenses to Net Worth ratio"
                  name="expensesToNetWorthRatio"
                  rules={[
                    { required: true, message: 'Please input a goal!' },
                    { type: 'number' },
                    { validator: positiveNumber }
                  ]}
                  extra={
                    <>
                      Estimated safe withdrawal rate, i.e. how much of the Net
                      Worth can be spent per year without reducing it over time.
                      Common value from the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/Trinity_study"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Trinity study
                      </a>{' '}
                      is 4%. Lower values are more conservative.
                    </>
                  }
                >
                  <InputNumber min={0.01} max={1} step={0.001}></InputNumber>
                </Form.Item>
                <Form.Item {...formStyles.tailLayout}>
                  <Space>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<SaveOutlined></SaveOutlined>}
                    >
                      Save
                    </Button>
                    <Button onClick={resetGoals}>Reset</Button>
                  </Space>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </PageContent>
    </>
  )
}
