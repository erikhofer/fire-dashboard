const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
})

export const useCurrency = () => ({
  format: (num: number) => formatter.format(num),
  symbol: '€'
})
