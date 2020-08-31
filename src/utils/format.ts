export const formatPercent = (ratio: number) =>
  ratio.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 1
  })
