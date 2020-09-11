import { useSelector } from 'react-redux'
import { AppState, Liability } from '../store/model'

export const useLiabilities = () =>
  useSelector<AppState, Liability[]>(state => state.profile.liabilities)
