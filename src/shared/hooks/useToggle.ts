import { useCallback, useState } from 'react'

export const useToggle = (start: boolean) => {
  const [isOn, setIsOn] = useState(start)
  const toggle = useCallback(() => {
    setIsOn(prev => !prev)
  }, [])
  const on = useCallback(() => {
    setIsOn(true)
  }, [])
  const off = useCallback(() => {
    setIsOn(false)
  }, [])

  return {
    isOn,
    isOff: !isOn,
    toggle,
    on,
    off,
  }
}
