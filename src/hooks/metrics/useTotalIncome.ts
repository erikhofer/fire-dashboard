import { useIncomes } from '../useIncomes'

export const useTotalIncome = () => {
  let totalIncome = 0
  let totalPassiveIncome = 0
  for (const income of useIncomes()) {
    totalIncome += income.amount
    if (income.isPassive) {
      totalPassiveIncome += income.amount
    }
  }
  return {
    totalIncome,
    totalPassiveIncome
  }
}
