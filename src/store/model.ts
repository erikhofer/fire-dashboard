export interface AppState {
  assets: Asset[]
}

export interface Entity {
  id: string
  name: string
  history: HistoryItem[]
  currentValue: number
}

export interface HistoryItem {
  value: number
  date: string
}

export type NewEntity<T extends Entity> = Omit<T, 'id' | 'history'>

export interface Asset extends Entity {}
