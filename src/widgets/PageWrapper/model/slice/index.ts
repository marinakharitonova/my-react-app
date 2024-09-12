import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = Record<string, number>

const slice = createSlice({
  name: 'scrollPosition',
  initialState: {} as State,
  reducers: {
    scrollPositionSaved: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state[payload.path] = payload.position
    },
  },
})

export const scrollPositionReducer = slice.reducer

export const { scrollPositionSaved } = slice.actions
