import { useSelector } from 'react-redux'
import { AppState, Asset } from '../store/model'

export const useAssets = () =>
  useSelector<AppState, Asset[]>(state => state.profile.assets)
