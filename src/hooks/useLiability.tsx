import { useSelector } from 'react-redux'
import { AppState, Liability } from '../store/model'

export const useLiability = (id: string) =>
  useSelector<AppState, Liability | undefined>(state =>
    state.profile.liabilities.find(liability => liability.id === id)
  )
