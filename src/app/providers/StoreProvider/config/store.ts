import {
  combineReducers,
  configureStore,
  EnhancedStore,
  Reducer,
} from '@reduxjs/toolkit'
import { authApi } from 'features/AuthByUserName'
import { authReducer } from 'entities/User'

const mode = import.meta.env.MODE

const staticReducers = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
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
      getDefaultMiddleware().concat(authApi.middleware),
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
