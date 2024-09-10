import { useCallback, useRef } from 'react'

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const timerId = useRef<ReturnType<typeof setTimeout>>()

  return useCallback(
    (...args: any[]) => {
      clearTimeout(timerId.current)
      timerId.current = setTimeout(() => callback(...args), delay)
    },
    [callback, delay]
  )
}
