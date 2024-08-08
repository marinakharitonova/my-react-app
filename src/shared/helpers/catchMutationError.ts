import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { notifyUi } from 'shared/helpers/notifyUi.ts'

type ErrorData = {
  message: string
}

export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error
}

export function isErrorWithMessage(data: unknown): data is ErrorData {
  return typeof data === 'object' && data != null && 'message' in data
}

export const catchMutationError = (
  error: FetchBaseQueryError | SerializedError
) => {
  if (isFetchBaseQueryError(error) && isErrorWithMessage(error.data)) {
    notifyUi(error.data.message, { type: 'error' })
  }
}
