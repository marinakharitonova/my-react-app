import {
  combineReducers,
  configureStore,
  EnhancedStore,
  Reducer,
} from '@reduxjs/toolkit'
import { authReducer } from 'entities/User'
import { clientApi } from 'shared/api/clientApi.ts'

const mode = import.meta.env.MODE

const staticReducers = {
  auth: authReducer,
  [clientApi.reducerPath]: clientApi.reducer,
}

export function initializeStore(preloadedState?: Partial<RootState>) {
  const store = setupStore(preloadedState)

  store.asyncReducers = {}

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers![key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  return store
}

function setupStore(
  preloadedState?: Partial<RootState>
): ReduxStoreWithManager {
  return configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(clientApi.middleware),
    preloadedState,
    devTools: mode === 'development',
  })
}

function createReducer(asyncReducers?: Record<string, Reducer>) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof createReducer>

export interface ReduxStoreWithManager extends EnhancedStore {
  asyncReducers?: Record<string, Reducer>
  injectReducer?: (key: string, asyncReducer: Reducer) => void
}
