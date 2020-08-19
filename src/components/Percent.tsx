import React from 'react'

export const Percent: React.FC<{ ratio: number }> = ({ ratio }) => {
  return (
    <>
      {ratio.toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 1
      })}
    </>
  )
}
