import { useSelector } from 'react-redux'
import { AppState, Expense } from '../store/model'

export const useExpenses = () =>
  useSelector<AppState, Expense[]>(state => state.profile.expenses)
