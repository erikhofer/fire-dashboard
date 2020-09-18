import { AppState } from './model'
import moment from 'moment'

export const initalState: AppState = {
  profile: {
    goals: {
      emergencyFund: 10_000,
      expensesToNetWorthRatio: 0.04
    },
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
    ],
    incomes: [
      {
        id: '6f25f1db-f54b-4c62-841e-084cf87a7f8a',
        name: 'Salary',
        amount: 3000,
        isPassive: false,
        history: [{ amount: 3000, date: moment().toISOString() }]
      },
      {
        id: 'b37f0ae1-ee48-4eec-ba74-320127fbf97a',
        name: 'Stock Dividends',
        amount: 100,
        isPassive: true,
        history: [{ amount: 100, date: moment().toISOString() }]
      }
    ],
    expenses: [
      {
        id: '3d6aa52f-b409-4b2f-b603-b7201fcff15f',
        name: 'Rent',
        amount: 1000,
        isFixed: true,
        history: [{ amount: 1000, date: moment().toISOString() }]
      },
      {
        id: '3d6aa52f-b409-4b2f-b603-b7201fcff15f',
        name: 'Essential Groceries',
        amount: 200,
        isFixed: true,
        history: [{ amount: 200, date: moment().toISOString() }]
      },
      {
        id: '164585a5-7fc7-472f-bb3f-cbb446d2ca26',
        name: 'Non-Essential Groceries',
        amount: 100,
        isFixed: false,
        history: [{ amount: 100, date: moment().toISOString() }]
      },
      {
        id: 'e1db5796-bf19-41d3-ab11-5ff18636b20c',
        name: 'Traveling',
        amount: 300,
        isFixed: false,
        history: [{ amount: 300, date: moment().toISOString() }]
      }
    ]
  }
}
