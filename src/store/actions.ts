import { createAction } from 'typesafe-actions'
import { Asset, Liability, Income, Expense, Goals } from './model'
import moment from 'moment'
import { v4 as uuid } from 'uuid'

const now = () => moment().toISOString()

function initializeEntity(newEntity: { amount: number }) {
  return {
    ...newEntity,
    id: uuid(),
    history: [{ amount: newEntity.amount, date: now() }]
  }
}

export const updateGoals = createAction('UPDATE_GOALS')<Goals>()

export const createAsset = createAction(
  'CREATE_ASSET',
  initializeEntity
)<Asset>()
export const updateAsset = createAction('UPDATE_ASSET', asset => asset, now)<
  Asset,
  string
>()
export const deleteAsset = createAction('DELETE_ASSET')<string>()

export const createLiability = createAction(
  'CREATE_LIABILITY',
  initializeEntity
)<Liability>()
export const updateLiability = createAction(
  'UPDATE_LIABILITY',
  liability => liability,
  now
)<Liability, string>()
export const deleteLiability = createAction('DELETE_LIABILITY')<string>()

export const createIncome = createAction(
  'CREATE_INCOME',
  initializeEntity
)<Income>()
export const updateIncome = createAction(
  'UPDATE_INCOME',
  income => income,
  now
)<Income, string>()
export const deleteIncome = createAction('DELETE_INCOME')<string>()

export const createExpense = createAction(
  'CREATE_EXPENSE',
  initializeEntity
)<Expense>()
export const updateExpense = createAction(
  'UPDATE_EXPENSE',
  expense => expense,
  now
)<Expense, string>()
export const deleteExpense = createAction('DELETE_EXPENSE')<string>()
