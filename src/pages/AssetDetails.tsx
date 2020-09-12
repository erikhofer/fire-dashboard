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
  Popconfirm,
  AutoComplete
} from 'antd'
import { useDispatch } from 'react-redux'
import { createAsset, updateAsset, deleteAsset } from '../store/actions'
import { SaveOutlined, DeleteOutlined } from '@ant-design/icons'
import { useAsset } from '../hooks/useAsset'
import { ValueHistory } from '../components/AmountHistory'
import { PageContent } from '../components/PageContent'
import { PageHeader } from '../components/PageHeader'
import { createBreadcrumb } from '../utils/breadcrumb'
import { positiveNumber } from '../utils/validation'
import { formStyles } from '../utils/form'
import { useAssetClasses } from '../hooks/useAssetClasses'

const initialAsset = {
  isEmergencyFund: false
}

export const AssetDetails: React.FC = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const asset = useAsset(id)
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const assetClasses = useAssetClasses().map(assetClass => ({
    value: assetClass
  }))

  const save = useCallback(
    (values: any) => {
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
  const deleteConfonfirmed = useCallback(() => {
    if (asset) {
      dispatch(deleteAsset(asset.id))
      history.replace('/assets')
      message.success('Asset deleted')
    }
  }, [dispatch, asset, history])

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
        extra={
          asset && (
            <Popconfirm
              title="Do you want to delete this asset entirely?"
              onConfirm={deleteConfonfirmed}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <Button danger icon={<DeleteOutlined />}>
                Delete Asset
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
                <Form.Item label="Asset Class" name="class">
                  <AutoComplete options={assetClasses} />
                </Form.Item>
                <Form.Item
                  label="Emergency Fund"
                  name="isEmergencyFund"
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
