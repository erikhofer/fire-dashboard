import { createAction } from 'typesafe-actions'
import { Asset } from './model'

export const createAsset = createAction('CREATE_ASSET')<Asset>()
export const updateAsset = createAction('UPDATE_ASSET')<Asset>()
export const deleteAsset = createAction('DELETE_ASSET')<string>()
