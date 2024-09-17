import { LoginMutation, LoginMutationResponse } from '../types/interface.ts'
import { baseQueryWithReAuth } from 'shared/api/baseQuery.ts'
import { createApi } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: builder => ({
    login: builder.mutation<LoginMutationResponse, LoginMutation>({
      query: data => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation<any, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation } = authApi
