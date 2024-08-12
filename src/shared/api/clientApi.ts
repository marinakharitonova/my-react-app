import { baseQueryWithReAuth } from 'shared/api/baseQuery.ts'
import { createApi } from '@reduxjs/toolkit/query/react'

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Profile'],
  endpoints: () => ({}),
})
