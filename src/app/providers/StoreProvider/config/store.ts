import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi } from 'features/AuthByUserName'
import { authReducer } from 'entities/User'

const mode = import.meta.env.MODE

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
})

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(authApi.middleware),
    preloadedState,
    devTools: mode === 'development',
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
