import { Provider } from 'react-redux'
import { RootState, setupStore } from '../config/store.ts'
import { ReactNode } from 'react'

export const StoreProvider = ({
  children,
  preloadedState,
}: {
  children?: ReactNode
  preloadedState?: Partial<RootState>
}) => {
  return <Provider store={setupStore(preloadedState)}>{children}</Provider>
}
