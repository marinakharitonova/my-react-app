import { clientApi } from 'shared/api/clientApi.ts'
import {
  Profile,
  UpdateProfileFormInputs,
} from 'entities/Profile/model/types/interface.ts'

export const profileApi = clientApi.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<Profile, void>({
      query: () => ({
        url: '/profile',
      }),
      providesTags: ['Profile'],
    }),
    updateProfile: builder.mutation<Profile, UpdateProfileFormInputs>({
      query: values => ({
        url: '/profile',
        method: 'PUT',
        body: values,
      }),
      invalidatesTags: result => (result ? ['Profile'] : []),
    }),
  }),
})

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi
