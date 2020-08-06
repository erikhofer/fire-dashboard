import React from 'react'
import { Page } from '../components/Page'
import { useSelector } from 'react-redux'
import { AppState, Asset } from '../store/model'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export const Assets: React.FC = () => {
  const assets = useSelector<AppState, Asset[]>(state => state.assets)
  return (
    <Page title="Assets">
      <Link to="/assets/create">
        <Button>Create</Button>
      </Link>
      {assets.map(asset => (
        <p>{asset.name}</p>
      ))}
    </Page>
  )
}
