import React, { useCallback } from 'react'
import { Page } from '../components/Page'
import { useSelector, useDispatch } from 'react-redux'
import { AppState, Asset } from '../store/model'
import { createAsset } from '../store/actions'
import { Button } from 'antd'

export const Assets: React.FC = () => {
  const assets = useSelector<AppState, Asset[]>(state => state.assets)
  const dispatch = useDispatch()
  const onCreate = useCallback(
    () => dispatch(createAsset({ name: 'Foo' } as Asset)),
    [dispatch]
  )
  return (
    <Page title="Assets">
      <Button onClick={onCreate}>Create</Button>
      {assets.map(asset => (
        <p>{asset.name}</p>
      ))}
    </Page>
  )
}
