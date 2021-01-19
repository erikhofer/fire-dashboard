import { Result, Spin } from 'antd'
import React from 'react'

export const AsyncPlaceholder: React.FC<{
  error: any
  isLoading: boolean
}> = props => {
  if (props.error !== null) {
    return (
      <Result
        status="500"
        title="Sorry, something went wrong."
        subTitle={props.error}
      />
    )
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
      }}
    >
      <Spin />
    </div>
  )
}
