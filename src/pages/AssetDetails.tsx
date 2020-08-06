import React, { useCallback } from 'react'
import { Page } from '../components/Page'
import { useParams, useHistory } from 'react-router-dom'
import { Card, Form, Input, Button, Col, Row, InputNumber, message } from 'antd'
import { NewEntity, Asset } from '../store/model'
import { useDispatch } from 'react-redux'
import { Store } from 'antd/lib/form/interface'
import { createAsset } from '../store/actions'
import { SaveOutlined } from '@ant-design/icons'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 }
}

export const AssetDetails: React.FC = () => {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()

  const save = useCallback(
    (values: Store) => {
      dispatch(createAsset(values as NewEntity<Asset>))
      history.replace('/assets')
      message.success('Asset created')
    },
    [dispatch]
  )

  return (
    <Page title={'Create Asset'}>
      <Row>
        <Col span={12}>
          <Card>
            <Form
              {...layout}
              name="asset"
              initialValues={{ remember: true }}
              onFinish={save}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input a name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Value"
                name="currentValue"
                rules={[{ required: true, message: 'Please input a value!' }]}
              >
                <InputNumber min={0}></InputNumber>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SaveOutlined></SaveOutlined>}
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Page>
  )
}
