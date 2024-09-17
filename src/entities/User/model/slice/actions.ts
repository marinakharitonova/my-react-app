import { slice } from './index.ts'

export const { authUserInitiated, loggedOut, tokenReceived, loggedIn } =
  slice.actions
