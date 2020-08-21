import { GoalProgress } from './goal-progress'
import { useTotalIncome } from '../metrics/useTotalIncome'
import { useTotalExpenses } from '../metrics/useTotalExpenses'
import { ProgressMessage } from '../../components/ProgessMessage'
import React from 'react'
import { Progress } from 'antd'
import { Currency } from '../../components/Currency'

export const usePassiveIncomeProgress: () => GoalProgress[] = () => {
  const { totalPassiveIncome } = useTotalIncome()
  const { totalExpenses, totalFixedExpenses } = useTotalExpenses()

  return [
    {
      target: (
        <>
          &gt; <Currency amount={0} />
        </>
      ),
      progress:
        totalPassiveIncome > 0 ? (
          <ProgressMessage type="success">
            You have some Passive Income
          </ProgressMessage>
        ) : (
          <ProgressMessage type="warning">
            You do not have any Passive Income
          </ProgressMessage>
        )
    },
    {
      target: 'Fixed Expenses',
      progress:
        totalPassiveIncome >= totalFixedExpenses ? (
          <ProgressMessage type="success">
            Your Passive Income covers your Fixed Expenses
          </ProgressMessage>
        ) : (
          <Progress
            percent={Math.round(
              (totalPassiveIncome / totalFixedExpenses) * 100
            )}
          />
        )
    },
    {
      target: 'Total Expenses',
      progress:
        totalPassiveIncome >= totalExpenses ? (
          <ProgressMessage type="success">
            Your Passive Income covers your Total Expenses
          </ProgressMessage>
        ) : (
          <Progress
            percent={Math.round((totalPassiveIncome / totalExpenses) * 100)}
          />
        )
    }
  ]
}
