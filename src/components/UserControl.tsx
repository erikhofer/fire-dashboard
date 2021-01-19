import React, { useEffect, useState } from 'react'
import { useAuth } from '../services/auth'
import {
  getSolidDataset,
  getStringNoLocale,
  getThing,
  getUrl
} from '@inrupt/solid-client'
import { VCARD } from '@inrupt/vocab-common-rdf'
import { Avatar, Dropdown, Menu, Space, Spin } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'

export const UserControl: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState<string | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const { webId, fetch, logout } = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      let dataset
      try {
        dataset = await getSolidDataset(webId, { fetch })
      } catch (error) {
        return
      }
      const profile = getThing(dataset, webId)
      if (!profile) {
        return
      }
      setName(getStringNoLocale(profile, VCARD.fn))
      setImageUrl(getUrl(profile, VCARD.hasPhoto))
    }
    fetchData().then(() => setLoading(false))
  }, [webId, fetch])

  if (loading) {
    return <Spin />
  }

  const avatarProps = imageUrl
    ? { src: imageUrl }
    : name
    ? { children: initials(name) }
    : { icon: <UserOutlined /> }

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item icon={<LogoutOutlined />} onClick={logout}>
            Log Out
          </Menu.Item>
        </Menu>
      }
    >
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Space>
          <span style={{ fontSize: 16 }}>{name}</span>
          <Avatar size="large" {...avatarProps} />
        </Space>
      </div>
    </Dropdown>
  )
}

const initials = (name: string) =>
  name
    .split(' ')
    .map(s => s[0])
    .join()
