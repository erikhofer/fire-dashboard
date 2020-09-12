import { useSelector } from 'react-redux'
import { AppState, Income } from '../store/model'

export const useIncomes = () =>
  useSelector<AppState, Income[]>(state => state.profile.incomes)
