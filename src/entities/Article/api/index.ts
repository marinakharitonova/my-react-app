import { clientApi } from 'shared/api/clientApi.ts'
import { IArticle } from 'entities/Article/model/types/interface.ts'
import { formatUrlGetParamsFromObject } from 'shared/helpers/formatUrlGetParamsFromObject.ts'
import { IPaginatedItems } from 'shared/types/interface.ts'

export const articleApi = clientApi.injectEndpoints({
  endpoints: builder => ({
    getArticleById: builder.query<IArticle, { id: number }>({
      query: ({ id }) => ({
        url: `/article/${id}`,
      }),
    }),
    getArticlesList: builder.query<
      IPaginatedItems<IArticle>,
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => ({
        url: `/articles${formatUrlGetParamsFromObject({
          page,
          limit,
        })}`,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newData) => {
        currentCache.items.push(...newData.items)
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return !!(
          previousArg === undefined ||
          (currentArg && previousArg.page < currentArg.page)
        )
      },
    }),
  }),
})

export const { useGetArticleByIdQuery, useGetArticlesListQuery } = articleApi
