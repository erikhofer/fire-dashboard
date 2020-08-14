import React from 'react'
import { useCurrency } from '../hooks/useCurrency'

export const Currency: React.FC<{ amount: number }> = ({ amount }) => {
  const { format } = useCurrency()
  return <>{format(amount)}</>
}
