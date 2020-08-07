import { Rule } from 'antd/lib/form'

export const positiveNumber = (_: Rule, value: number) =>
  value < 0 ? Promise.reject('Must be positive!') : Promise.resolve()
