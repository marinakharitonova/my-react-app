import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_TOKEN, LOCAL_STORAGE_USER } from '../constants.ts'
import { User } from '../types/interface.ts'
import { LoginMutationResponse } from 'features/AuthByUserName/model/types/interface.ts'

type AuthState = {
  user: User | null
  token: string | null
}

export const slice = createSlice({
  name: 'auth',
  initialState: { user: null } as AuthState,
  reducers: {
    authUserInitiated: state => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER)
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)
      if (user && token) {
        state.user = JSON.parse(user)
        state.token = token
      }
    },
    loggedOut: state => {
      state.user = null
      state.token = null

      localStorage.removeItem(LOCAL_STORAGE_USER)
      localStorage.removeItem(LOCAL_STORAGE_TOKEN)
    },
    tokenReceived: (state, { payload }: PayloadAction<string>) => {
      state.token = payload
      localStorage.setItem(LOCAL_STORAGE_TOKEN, 'user token')
    },
    loggedIn: (state, { payload }: PayloadAction<LoginMutationResponse>) => {
      const user = {
        id: payload.id,
        username: payload.username,
      }

      state.user = user
      state.token = 'user token'
      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user))
      localStorage.setItem(LOCAL_STORAGE_TOKEN, 'user token')
    },
  },
})
