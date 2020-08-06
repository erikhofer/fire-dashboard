import { produce } from 'immer'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'

import * as actions from './actions'
import { AppState, Asset } from './model'

export type AppAction = ActionType<typeof actions>

export const reducer = combineReducers<AppState, AppAction>({
  assets: assetReducer
})

function assetReducer(state: Asset[] = [], action: AppAction): Asset[] {
  return produce(state, draft => {
    switch (action.type) {
      case getType(actions.createAsset):
        draft.push(action.payload)
        break
      case getType(actions.updateAsset):
        draft[draft.findIndex(asset => asset.id === action.payload.id)] =
          action.payload
        break
      case getType(actions.deleteAsset):
        draft.splice(
          draft.findIndex(asset => asset.id === action.payload),
          1
        )
        break
    }
  })
}
