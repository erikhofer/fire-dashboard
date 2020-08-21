import { useCashFlow } from './metrics/useCashFlow'

export const useMonthsToAccumulateCashFlow = (target: number) => {
  const cashFlow = useCashFlow()
  if (cashFlow <= 0 || target <= 0) {
    return undefined
  }
  return target / cashFlow
}
