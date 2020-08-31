import React from 'react'
import { formatPercent } from '../utils/format'

export const Percent: React.FC<{ ratio: number }> = ({ ratio }) => {
  return <>{formatPercent(ratio)}</>
}
