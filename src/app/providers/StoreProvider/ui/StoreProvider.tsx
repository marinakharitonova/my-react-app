import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { initializeStore, RootState } from 'app/providers/StoreProvider'

export const StoreProvider = ({
  children,
  preloadedState,
}: {
  children?: ReactNode
  preloadedState?: Partial<RootState>
}) => {
  return <Provider store={initializeStore(preloadedState)}>{children}</Provider>
}
