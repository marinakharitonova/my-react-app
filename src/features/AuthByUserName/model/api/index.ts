import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  LoginMutation,
  LoginMutationResponse,
} from 'features/AuthByUserName/model/types/interface.ts'

const API_URL = import.meta.env.VITE_CLIENT_API

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
})

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
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
