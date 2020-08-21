import { useTotalIncome } from './useTotalIncome'
import { useTotalExpenses } from './useTotalExpenses'

export const useCashFlow = () => {
  const { totalIncome } = useTotalIncome()
  const { totalExpenses } = useTotalExpenses()
  return totalIncome - totalExpenses
}
