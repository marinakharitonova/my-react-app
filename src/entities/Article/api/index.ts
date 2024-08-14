import { clientApi } from 'shared/api/clientApi.ts'
import { IArticle } from 'entities/Article/model/types/interface.ts'

export const articleApi = clientApi.injectEndpoints({
  endpoints: builder => ({
    getArticleById: builder.query<IArticle, { id: number }>({
      query: ({ id }) => ({
        url: `/article/${id}`,
      }),
    }),
  }),
})

export const { useGetArticleByIdQuery } = articleApi
