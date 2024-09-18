import { createContext, useContext } from 'react'
import { GestureType, SpringType } from './interface.ts'

interface AnimationContextPayload {
  Gesture?: GestureType
  Spring?: SpringType
  isLoaded?: boolean
}

export const AnimationContext = createContext<AnimationContextPayload>({})

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContextPayload>
}
