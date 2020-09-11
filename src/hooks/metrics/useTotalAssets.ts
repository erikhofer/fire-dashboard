import { useAssets } from '../useAssets'

export const useTotalAssets = () =>
  useAssets().reduce((sum, curr) => sum + curr.amount, 0)
