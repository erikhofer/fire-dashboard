import { useCallback } from 'react'

export function useTargetValue<T, R>(fn: (value: T) => R) {
  return useCallback(
    (event: { target: { value: T } }) => fn(event.target.value),
    [fn]
  )
}
