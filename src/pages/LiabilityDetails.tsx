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
  Popconfirm
} from 'antd'
import { useDispatch } from 'react-redux'
import {
  createLiability,
  updateLiability,
  deleteLiability
} from '../store/actions'
import { SaveOutlined, DeleteOutlined } from '@ant-design/icons'
import { ValueHistory } from '../components/AmountHistory'
import { PageContent } from '../components/PageContent'
import { PageHeader } from '../components/PageHeader'
import { createBreadcrumb } from '../utils/breadcrumb'
import { positiveNumber } from '../utils/validation'
import { formStyles } from '../utils/form'
import { useLiability } from '../hooks/useLiability'

const initialLiability = {
  isEmergencyFund: false
}

export const LiabilityDetails: React.FC = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const liability = useLiability(id)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const save = useCallback(
    (values: any) => {
      if (liability === undefined) {
        dispatch(createLiability(values))
        history.replace('/liabilities')
        message.success('Liability created')
      } else {
        dispatch(updateLiability({ ...liability, ...values }))
        message.success('Liability updated')
      }
    },
    [dispatch, liability, history]
  )

  const reset = useCallback(() => form.resetFields(), [form])
  const deleteConfonfirmed = useCallback(() => {
    if (liability) {
      dispatch(deleteLiability(liability.id))
      history.replace('/liabilities')
      message.success('Liability deleted')
    }
  }, [dispatch, liability, history])

  if (liability === undefined && id !== 'create') {
    return <Result status="404" title="Liability not found" />
  }

  const title = liability?.name ?? 'Create Liability'

  return (
    <>
      <PageHeader
        title={title}
        breadcrumb={createBreadcrumb([
          { path: '/liabilities', breadcrumbName: 'Liabilities' },
          { path: id, breadcrumbName: title }
        ])}
        extra={
          liability && (
            <Popconfirm
              title="Do you want to delete this liability entirely?"
              onConfirm={deleteConfonfirmed}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <Button danger icon={<DeleteOutlined />}>
                Delete Liability
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
                name="asset"
                initialValues={liability ?? initialLiability}
                onFinish={save}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input a name!' }]}
                >
                  <Input autoFocus={liability === undefined} />
                </Form.Item>
                <Form.Item
                  label="Amount"
                  name="amount"
                  rules={[
                    { required: true, message: 'Please input a value!' },
                    { type: 'number' },
                    { validator: positiveNumber }
                  ]}
                >
                  <InputNumber></InputNumber>
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
          {liability && (
            <Col span={12}>
              <ValueHistory history={liability.history}></ValueHistory>
            </Col>
          )}
        </Row>
      </PageContent>
    </>
  )
}
