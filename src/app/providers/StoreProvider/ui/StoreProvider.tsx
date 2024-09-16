import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { RootState, setupStore } from 'app/providers/StoreProvider'

export const StoreProvider = ({
  children,
  preloadedState,
}: {
  children?: ReactNode
  preloadedState?: Partial<RootState>
}) => {
  return <Provider store={setupStore(preloadedState)}>{children}</Provider>
}
