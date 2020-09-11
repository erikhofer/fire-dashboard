import { useAssets } from '../useAssets'

export const useTotalEmergencyFund = () => {
  return useAssets()
    .filter(a => a.isEmergencyFund)
    .reduce((sum, curr) => sum + curr.amount, 0)
}
