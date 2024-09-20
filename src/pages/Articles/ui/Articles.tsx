import { useCallback, useEffect, useState } from 'react'
import { useGetArticlesListQuery } from 'entities/Article/api'
import { PageWrapper } from 'widgets/PageWrapper'
import { ContentLoader } from 'shared/ui/ContentLoader'
import { ARTICLE_LIST_LIMIT, ArticleList } from 'entities/Article'
import { Loader } from 'shared/ui/Loader'

const Articles = () => {
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState<number | null>(null)
  const { data, isLoading, isError, isFetching } = useGetArticlesListQuery({
    page,
    limit: ARTICLE_LIST_LIMIT,
  })

  useEffect(() => {
    if (!data || totalPage !== null) return

    setTotalPage(data.pagination.total_page)
  }, [data, totalPage])

  const loadMore = useCallback(() => {
    if (totalPage === page) return
    setPage(page + 1)
  }, [page, totalPage])

  return (
    <ContentLoader isLoading={isLoading} isError={isError}>
      {data?.items && (
        <PageWrapper
          isHidden={isFetching}
          callback={loadMore}
          dataTestid={'Articles'}
        >
          <ArticleList articles={data.items} />
          {isFetching && <Loader />}
        </PageWrapper>
      )}
    </ContentLoader>
  )
}

export default Articles
