import { RootState } from 'app/providers/StoreProvider'

export const selectAuthUser = (state: RootState) => state.auth.user
