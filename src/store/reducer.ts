import { produce } from 'immer'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { AppState, Asset, Entity, Profile } from './model'

export type AppAction = ActionType<typeof actions>

const profileReducer = combineReducers<Profile, AppAction>({
  assets: assetReducer
})

export const reducer = combineReducers<AppState, AppAction>({
  profile: profileReducer
})

/**
 * If the value of the entity is changed in this update, add a new record to the history.
 *
 * @param date for the new history item, typically 'now'
 */
function withUpdatedHistory<T extends Entity>(
  oldEntity: T,
  newEntity: T,
  date: string
): T {
  if (oldEntity.amount === newEntity.amount) {
    return newEntity
  }
  return {
    ...newEntity,
    history: [{ amount: newEntity.amount, date }, ...newEntity.history]
  }
}

function assetReducer(state: Asset[] = [], action: AppAction): Asset[] {
  return produce(state, draft => {
    switch (action.type) {
      case getType(actions.createAsset):
        draft.push(action.payload)
        break
      case getType(actions.updateAsset):
        const index = draft.findIndex(asset => asset.id === action.payload.id)
        draft[index] = withUpdatedHistory(
          draft[index],
          action.payload,
          action.meta
        )
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
