import {
  LoginMutation,
  LoginMutationResponse,
} from 'features/AuthByUserName/model/types/interface.ts'
import { clientApi } from 'shared/api/clientApi.ts'

export const authApi = clientApi.injectEndpoints({
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
