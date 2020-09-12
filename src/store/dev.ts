import { AppState } from './model'
import moment from 'moment'

export const initalState: AppState = {
  profile: {
    assets: [
      {
        id: '1cf9cf6e-272a-4261-9e6a-25cdcbab3aa3',
        name: 'MSCI World',
        amount: 20_000,
        isEmergencyFund: false,
        class: 'Stocks',
        history: [{ amount: 20_000, date: moment().toISOString() }]
      },
      {
        id: '17bb741b-f43b-470f-ae4a-57e1db05a7af',
        name: 'MSCI Emerging Markets',
        amount: 10_000,
        isEmergencyFund: false,
        class: 'Stocks',
        history: [{ amount: 10_000, date: moment().toISOString() }]
      },
      {
        id: 'fa8dd356-0335-46bf-8344-d5f713e9d144',
        name: 'Checking Account',
        amount: 1000,
        isEmergencyFund: false,
        class: 'Cash',
        history: [{ amount: 1000, date: moment().toISOString() }]
      },
      {
        id: '9b609a11-661a-43ef-9486-a33d8988a435',
        name: 'Savings Account',
        amount: 2500,
        isEmergencyFund: true,
        class: 'Cash',
        history: [{ amount: 2500, date: moment().toISOString() }]
      },
      {
        id: 'c2873f25-9ca9-4f47-b7b8-71fee93eab56',
        name: 'Cash under Mattress',
        amount: 500,
        isEmergencyFund: true,
        class: 'Cash',
        history: [{ amount: 500, date: moment().toISOString() }]
      },
      {
        id: 'f5df4cdf-3f44-492a-aa7b-e6b406ce4467',
        name: 'Bitcoin',
        amount: 2000,
        isEmergencyFund: false,
        class: 'Crypto',
        history: [{ amount: 2000, date: moment().toISOString() }]
      }
    ],
    liabilities: [
      {
        id: '75df4d76-cdc5-41f6-ba31-f81f74b3f240',
        name: 'Student Loan',
        amount: 10_000,
        history: [{ amount: 10_000, date: moment().toISOString() }]
      }
    ]
  }
}
