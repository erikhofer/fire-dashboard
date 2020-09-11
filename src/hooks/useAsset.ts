import { useSelector } from 'react-redux'
import { AppState, Asset } from '../store/model'

export const useAsset = (id: string) =>
  useSelector<AppState, Asset | undefined>(state =>
    state.profile.assets.find(asset => asset.id === id)
  )
