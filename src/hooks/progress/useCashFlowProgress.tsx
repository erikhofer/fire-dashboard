import { GoalProgress } from './goal-progress'
import { useCashFlow } from '../metrics/useCashFlow'
import React from 'react'
import { Currency } from '../../components/Currency'
import { ProgressMessage } from '../../components/ProgessMessage'

export const useCashFlowProgress = (): GoalProgress[] => {
  const cashFlow = useCashFlow()

  return [
    {
      target: (
        <>
          &gt; <Currency amount={0} />
        </>
      ),
      progress:
        cashFlow > 0 ? (
          <ProgressMessage type="success">
            Your Net Worth is increasing
          </ProgressMessage>
        ) : cashFlow === 0 ? (
          <ProgressMessage type="warning">
            Your Net Worth is stagnating
          </ProgressMessage>
        ) : (
          <ProgressMessage type="warning">
            Your Net Worth is decreasing
          </ProgressMessage>
        )
    }
  ]
}
