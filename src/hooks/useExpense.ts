import { useSelector } from 'react-redux'
import { AppState, Expense } from '../store/model'

export const useExpense = (id: string) =>
  useSelector<AppState, Expense | undefined>(state =>
    state.profile.expenses.find(expense => expense.id === id)
  )
