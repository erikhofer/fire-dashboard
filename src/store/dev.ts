import { AppState } from './model'
import moment from 'moment'

export const initalState: AppState = {
  assets: [
    {
      id: 'asset1',
      name: 'Sample Asset 1',
      currentValue: 1337,
      history: [{ value: 42, date: moment().toISOString() }]
    }
  ]
}
