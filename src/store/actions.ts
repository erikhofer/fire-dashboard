import { createAction } from 'typesafe-actions'
import { Asset } from './model'
import moment from 'moment'
import { v4 as uuid } from 'uuid'

const now = () => moment().toISOString()

function initializeEntity(newEntity: { amount: number }) {
  return {
    ...newEntity,
    id: uuid(),
    history: [{ amount: newEntity.amount, date: now() }]
  }
}

export const createAsset = createAction('CREATE_ASSET', initializeEntity)<
  Asset
>()
export const updateAsset = createAction('UPDATE_ASSET', asset => asset, now)<
  Asset,
  string
>()
export const deleteAsset = createAction('DELETE_ASSET')<string>()
