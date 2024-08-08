import { useEffect } from 'react'
import { Reducer } from '@reduxjs/toolkit'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/store.ts'

export const useReducer = (reducers: Record<string, Reducer>) => {
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!store.injectReducer || store.asyncReducers?.[name]) return

      store.injectReducer(name, reducer)
      //dispatch({ type: `@INIT ${name} reducer` })
    })
  }, [])
}
