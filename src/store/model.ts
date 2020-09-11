export interface AppState {
  profile: Profile
}

export interface Profile {
  assets: Asset[]
}

export interface Entity {
  id: string
  name: string
  history: HistoryItem[]
  amount: number
}

export interface HistoryItem {
  amount: number
  date: string
}

export type NewEntity<T extends Entity> = Omit<T, 'id' | 'history'>

export interface Asset extends Entity {
  isEmergencyFund: boolean
}
