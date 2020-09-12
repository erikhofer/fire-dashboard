import { useSelector } from 'react-redux'
import { AppState, Income } from '../store/model'

export const useIncome = (id: string) =>
  useSelector<AppState, Income | undefined>(state =>
    state.profile.incomes.find(income => income.id === id)
  )
