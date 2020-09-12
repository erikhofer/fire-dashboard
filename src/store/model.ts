export interface AppState {
  profile: Profile
}

export interface Profile {
  assets: Asset[]
  liabilities: Liability[]
  incomes: Income[]
  expenses: Expense[]
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
  class?: string
}

export interface Liability extends Entity {}

export interface Income extends Entity {
  isPassive: boolean
}

export interface Expense extends Entity {
  isFixed: boolean
}
