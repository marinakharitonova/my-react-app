import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/providers/StoreProvider'
import { LOCAL_STORAGE_USER } from '../constants.ts'
import { authApi } from 'features/AuthByUserName'
import { User } from '../types/interface.ts'

type AuthState = {
  user: User | null
  //token: string | null
}

const slice = createSlice({
  name: 'auth',
  initialState: { user: null } as AuthState,
  reducers: {
    authUserInitiated: state => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER)
      if (user) {
        state.user = JSON.parse(user)
      }
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          const user = {
            id: payload.id,
            username: payload.username,
          }

          state.user = user
          localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user))
        }
      )
      .addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
        state.user = null
        localStorage.removeItem(LOCAL_STORAGE_USER)
      })
  },
})

export const authReducer = slice.reducer

export const { authUserInitiated } = slice.actions

export const selectAuthUser = (state: RootState) => state.auth.user
