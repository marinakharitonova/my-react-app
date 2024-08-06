import { Provider } from 'react-redux'
import { setupStore } from '../config/store.ts'
import { ReactNode } from 'react'

export const StoreProvider = ({ children }: { children?: ReactNode }) => {
  return <Provider store={setupStore()}>{children}</Provider>
}
