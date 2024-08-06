import { combineReducers, configureStore } from '@reduxjs/toolkit'
const mode = import.meta.env.MODE

const rootReducer = combineReducers({
  // auth: authReducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
  // [newsApiSlice.reducerPath]: newsApiSlice.reducer,
  // [chatApiSlice.reducerPath]: chatApiSlice.reducer
})

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    // middleware: getDefaultMiddleware =>
    //   getDefaultMiddleware()
    //     .concat(apiSlice.middleware)
    //     .concat(newsApiSlice.middleware)
    //     .concat(chatApiSlice.middleware),
    preloadedState,
    devTools: mode === 'development',
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
