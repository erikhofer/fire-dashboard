export interface BalanceItem {
  id: string
  name: string
  history: HistoryItem[]
  currentValue: number
}

export interface HistoryItem {
  value: number
  date: string
}
