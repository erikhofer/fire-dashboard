import { createAction } from 'typesafe-actions'
import { Asset, NewEntity, Entity } from './model'
import moment from 'moment'
import { v4 as uuid } from 'uuid'

function initializeEntity(newEntity: { currentValue: number }) {
  return {
    ...newEntity,
    id: uuid(),
    history: [{ value: newEntity.currentValue, date: moment().toISOString() }]
  }
}

export const createAsset = createAction('CREATE_ASSET', initializeEntity)<
  Asset
>()
export const updateAsset = createAction('UPDATE_ASSET')<Asset>()
export const deleteAsset = createAction('DELETE_ASSET')<string>()
