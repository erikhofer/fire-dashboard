import { GoalProgress } from './goal-progress'
import { useNetWorth } from '../metrics/useNetWorth'
import { Currency } from '../../components/Currency'
import React from 'react'
import { ProgressMessage } from '../../components/ProgessMessage'
import { useCashFlow } from '../metrics/useCashFlow'
import { useTotalExpenses } from '../metrics/useTotalExpenses'
import { useGoals } from '../useGoals'
import { Percent } from '../../components/Percent'
import { Progress } from 'antd'
import { Info } from '../../components/Info'
import { useMonthsToAccumulateCashFlow } from '../useMonthsToAccumulateCashFlow'

export const useNetWorthProgress = (): GoalProgress[] => {
  const netWorth = useNetWorth()
  const cashFlow = useCashFlow()
  const goals = useGoals()
  const { totalExpenses, totalFixedExpenses } = useTotalExpenses()
  const netWorthNeededToCoverTotalExpenses =
    (totalExpenses * 12) / goals.expensesToNetWorthRatio
  const netWorthNeededToCoverTotalFixedExpenses =
    (totalFixedExpenses * 12) / goals.expensesToNetWorthRatio
  const monthsToEtaTotalExpenses = useMonthsToAccumulateCashFlow(
    netWorthNeededToCoverTotalExpenses - netWorth
  )
  const monthsToEtaTotalFixedExpenses = useMonthsToAccumulateCashFlow(
    netWorthNeededToCoverTotalFixedExpenses - netWorth
  )

  return [
    {
      target: <Currency amount={0} />,
      progress:
        netWorth >= 0 ? (
          <ProgressMessage type="success">You are not in debt</ProgressMessage>
        ) : cashFlow > 0 ? (
          <ProgressMessage type="in-progress">
            You are in debt but making progress
          </ProgressMessage>
        ) : (
          <ProgressMessage type="warning">
            You are in debt and do not have positive Cash Flow
          </ProgressMessage>
        )
    },
    {
      target: (
        <>
          Fixed Expenses (yearly) are{' '}
          <Percent ratio={goals.expensesToNetWorthRatio} />{' '}
          <Info>
            Net Wort needed:{' '}
            <Currency amount={netWorthNeededToCoverTotalFixedExpenses} />
          </Info>
        </>
      ),
      progress:
        netWorth >= 0 ? (
          netWorth >= netWorthNeededToCoverTotalFixedExpenses ? (
            <ProgressMessage type="success">
              Your assets may cover your Fixed Expenses forever
            </ProgressMessage>
          ) : (
            <Progress
              percent={Math.round(
                (netWorth / netWorthNeededToCoverTotalFixedExpenses) * 100
              )}
            />
          )
        ) : (
          <Progress percent={0} />
        ),
      monthsToEta: monthsToEtaTotalFixedExpenses
    },
    {
      target: (
        <>
          Total Expenses (yearly) are{' '}
          <Percent ratio={goals.expensesToNetWorthRatio} />{' '}
          <Info>
            Net Wort needed:{' '}
            <Currency amount={netWorthNeededToCoverTotalExpenses} />
          </Info>
        </>
      ),
      progress:
        netWorth >= 0 ? (
          netWorth >= netWorthNeededToCoverTotalExpenses ? (
            <ProgressMessage type="success">
              Your assets may cover your Total Expenses forever
            </ProgressMessage>
          ) : (
            <Progress
              percent={Math.round(
                (netWorth / netWorthNeededToCoverTotalExpenses) * 100
              )}
            />
          )
        ) : (
          <Progress percent={0} />
        ),
      monthsToEta: monthsToEtaTotalExpenses
    }
  ]
}
