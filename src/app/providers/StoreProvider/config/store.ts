import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'entities/User'
import { clientApi } from 'shared/api/clientApi.ts'
import { scrollPositionReducer } from 'widgets/PageWrapper'

import { ENVIRONMENT } from '../../../../constants.ts'
import { authApi } from 'features/AuthByUserName'

const rootReducer = combineReducers({
  auth: authReducer,
  scrollPosition: scrollPositionReducer,
  [clientApi.reducerPath]: clientApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(clientApi.middleware),
    preloadedState,
    devTools: ENVIRONMENT === 'development',
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// const staticReducers = {
//   auth: authReducer,
//   scrollPosition: scrollPositionReducer,
//   [clientApi.reducerPath]: clientApi.reducer,
// }
//
// export function initializeStore(preloadedState?: Partial<RootState>) {
//   const store = setupStore(preloadedState)
//
//   store.asyncReducers = {}
//
//   store.injectReducer = (key, asyncReducer) => {
//     store.asyncReducers![key] = asyncReducer
//     store.replaceReducer(createReducer(store.asyncReducers))
//   }
//
//   return store
// }
//
// function setupStore(
//   preloadedState?: Partial<RootState>
// ): ReduxStoreWithManager {
//   return configureStore({
//     reducer: createReducer(),
//     middleware: getDefaultMiddleware =>
//       getDefaultMiddleware().concat(clientApi.middleware),
//     preloadedState,
//     devTools: ENVIRONMENT === 'development',
//   })
// }
//
// function createReducer(asyncReducers?: Record<string, Reducer>) {
//   return combineReducers({
//     ...staticReducers,
//     ...asyncReducers,
//   })
// }
//
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']
// export type RootState = ReturnType<typeof createReducer>
//
// export interface ReduxStoreWithManager extends EnhancedStore {
//   asyncReducers?: Record<string, Reducer>
//   injectReducer?: (key: string, asyncReducer: Reducer) => void
// }
