import React from 'react'
import { GoalProgress } from './goal-progress'
import { Progress } from 'antd'
import { useGoals } from '../useGoals'
import { Currency } from '../../components/Currency'
import { useTotalEmergencyFund } from '../metrics/useTotalEmergencyFund'
import { useMonthsToAccumulateCashFlow } from '../useMonthsToAccumulateCashFlow'
import { useTotalExpenses } from '../metrics/useTotalExpenses'
import { ProgressMessage } from '../../components/ProgessMessage'

export const useEmergencyFundProgress: () => GoalProgress[] = () => {
  const goals = useGoals()
  const totalEmergencyFund = useTotalEmergencyFund()
  const { totalExpenses } = useTotalExpenses()
  const monthsToEta = useMonthsToAccumulateCashFlow(
    goals.emergencyFund - totalEmergencyFund
  )
  const done = totalEmergencyFund >= goals.emergencyFund

  return [
    {
      target: <Currency amount={goals.emergencyFund} />,
      progress: done ? (
        <ProgressMessage type="success">
          Your emergency fund covers your total expenses for{' '}
          {(totalEmergencyFund / totalExpenses).toFixed(0)} months
        </ProgressMessage>
      ) : (
        <Progress
          percent={Math.round((totalEmergencyFund / goals.emergencyFund) * 100)}
        />
      ),
      monthsToEta
    }
  ]
}
