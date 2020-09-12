import { useAssets } from './useAssets'

export const useAssetClasses = () =>
  Array.from(
    new Set(
      useAssets()
        .filter(asset => !!asset.class)
        .map(asset => asset.class!)
    )
  )
