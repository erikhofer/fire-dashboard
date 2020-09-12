import React, { useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
  Card,
  Form,
  Input,
  Button,
  Col,
  Row,
  InputNumber,
  message,
  Result,
  Space,
  Switch,
  Popconfirm
} from 'antd'
import { useDispatch } from 'react-redux'
import { createIncome, updateIncome, deleteIncome } from '../store/actions'
import { SaveOutlined, DeleteOutlined } from '@ant-design/icons'
import { ValueHistory } from '../components/AmountHistory'
import { PageContent } from '../components/PageContent'
import { PageHeader } from '../components/PageHeader'
import { createBreadcrumb } from '../utils/breadcrumb'
import { positiveNumber } from '../utils/validation'
import { formStyles } from '../utils/form'
import { useIncome } from '../hooks/useIncome'

const initialIncome = {
  isPassive: false
}

export const IncomeDetails: React.FC = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const income = useIncome(id)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const save = useCallback(
    (values: any) => {
      if (income === undefined) {
        dispatch(createIncome(values))
        history.replace('/incomes')
        message.success('Income created')
      } else {
        dispatch(updateIncome({ ...income, ...values }))
        message.success('Income updated')
      }
    },
    [dispatch, income, history]
  )

  const reset = useCallback(() => form.resetFields(), [form])
  const deleteConfonfirmed = useCallback(() => {
    if (income) {
      dispatch(deleteIncome(income.id))
      history.replace('/incomes')
      message.success('Income deleted')
    }
  }, [dispatch, income, history])

  if (income === undefined && id !== 'create') {
    return <Result status="404" title="Income not found" />
  }

  const title = income?.name ?? 'Create Income'

  return (
    <>
      <PageHeader
        title={title}
        breadcrumb={createBreadcrumb([
          { path: '/incomes', breadcrumbName: 'Income' },
          { path: id, breadcrumbName: title }
        ])}
        extra={
          income && (
            <Popconfirm
              title="Do you want to delete this income entirely?"
              onConfirm={deleteConfonfirmed}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <Button danger icon={<DeleteOutlined />}>
                Delete Income
              </Button>
            </Popconfirm>
          )
        }
      />
      <PageContent>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Properties">
              <Form
                {...formStyles.layout}
                form={form}
                name="income"
                initialValues={income ?? initialIncome}
                onFinish={save}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input a name!' }]}
                >
                  <Input autoFocus={income === undefined} />
                </Form.Item>
                <Form.Item
                  label="Amount (monthly)"
                  name="amount"
                  rules={[
                    { required: true, message: 'Please input a value!' },
                    { type: 'number' },
                    { validator: positiveNumber }
                  ]}
                >
                  <InputNumber></InputNumber>
                </Form.Item>
                <Form.Item
                  label="Passive Income"
                  name="isPassive"
                  valuePropName="checked"
                >
                  <Switch />
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
                    <Button onClick={reset}>Reset</Button>
                  </Space>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          {income && (
            <Col span={12}>
              <ValueHistory history={income.history}></ValueHistory>
            </Col>
          )}
        </Row>
      </PageContent>
    </>
  )
}
