import { AppState } from './model'
import moment from 'moment'

export const initalState: AppState = {
  assets: [
    {
      id: '1cf9cf6e-272a-4261-9e6a-25cdcbab3aa3',
      name: 'Trade Republic',
      currentValue: 1337,
      isEmergencyFund: false,
      history: [{ value: 1337, date: moment().toISOString() }]
    },
    {
      id: 'fa8dd356-0335-46bf-8344-d5f713e9d144',
      name: 'Savings Account',
      currentValue: 420,
      isEmergencyFund: true,
      history: [{ value: 420, date: moment().toISOString() }]
    }
  ]
}
