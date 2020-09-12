import { useExpenses } from '../useExpenses'

export const useTotalExpenses = () => {
  let totalExpenses = 0
  let totalFixedExpenses = 0
  for (const expense of useExpenses()) {
    totalExpenses += expense.amount
    if (expense.isFixed) {
      totalFixedExpenses += expense.amount
    }
  }
  return {
    totalExpenses,
    totalFixedExpenses
  }
}
