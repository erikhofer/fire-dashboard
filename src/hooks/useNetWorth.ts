import { useTotalAssets } from './useTotalAssets'
import { useTotalLiablities } from './useTotalLiabilities'

export const useNetWorth = () => useTotalAssets() + useTotalLiablities()
