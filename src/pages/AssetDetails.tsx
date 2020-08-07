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
  Switch
} from 'antd'
import { useDispatch } from 'react-redux'
import { createAsset, updateAsset } from '../store/actions'
import { SaveOutlined } from '@ant-design/icons'
import { useAsset } from '../hooks/useAsset'
import { ValueHistory } from '../components/ValueHistory'
import { PageContent } from '../components/PageContent'
import { PageHeader } from '../components/PageHeader'
import { createBreadcrumb } from '../utils/breadcrumb'
import { positiveNumber } from '../utils/validation'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 }
}

const initialAsset = {
  isEmergencyFund: false
}

export const AssetDetails: React.FC = () => {
  const history = useHistory()
  const { id } = useParams()
  const asset = useAsset(id)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const save = useCallback(
    (values: any) => {
      console.log(values)
      if (asset === undefined) {
        dispatch(createAsset(values))
        history.replace('/assets')
        message.success('Asset created')
      } else {
        dispatch(updateAsset({ ...asset, ...values }))
        message.success('Asset updated')
      }
    },
    [dispatch, asset, history]
  )

  const reset = useCallback(() => form.resetFields(), [form])

  if (asset === undefined && id !== 'create') {
    return <Result status="404" title="Asset not found" />
  }

  const title = asset?.name ?? 'Create Asset'

  return (
    <>
      <PageHeader
        title={title}
        breadcrumb={createBreadcrumb([
          { path: '/assets', breadcrumbName: 'Assets' },
          { path: id, breadcrumbName: title }
        ])}
      />
      <PageContent>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Properties">
              <Form
                {...layout}
                form={form}
                name="asset"
                initialValues={asset ?? initialAsset}
                onFinish={save}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input a name!' }]}
                >
                  <Input autoFocus={asset === undefined} />
                </Form.Item>
                <Form.Item
                  label="Value"
                  name="currentValue"
                  rules={[
                    { required: true, message: 'Please input a value!' },
                    { type: 'number' },
                    {
                      validator: positiveNumber,
                      message: 'Assets must have positive value!'
                    }
                  ]}
                >
                  <InputNumber></InputNumber>
                </Form.Item>
                <Form.Item
                  label="Emergency Fund"
                  name="isEmergencyFund"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
                <Form.Item {...tailLayout}>
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
          {asset && (
            <Col span={12}>
              <ValueHistory history={asset.history}></ValueHistory>
            </Col>
          )}
        </Row>
      </PageContent>
    </>
  )
}
