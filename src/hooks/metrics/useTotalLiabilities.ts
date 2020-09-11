import { useLiabilities } from '../useLiabilities'

export const useTotalLiablities = () =>
  useLiabilities().reduce((sum, curr) => sum + curr.amount, 0)
