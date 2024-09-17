import { useCallback, useEffect, useState } from 'react'
import { useGetArticlesListQuery } from 'entities/Article/api'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList.tsx'
import { ContentLoader } from 'shared/ui/ContentLoader/ContentLoader.tsx'
import { ARTICLE_LIST_LIMIT } from 'entities/Article/model/consts/constants.ts'
import { Loader } from 'shared/ui/Loader/Loader.tsx'
import { PageWrapper } from 'widgets/PageWrapper'

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
        <PageWrapper isHidden={isFetching} callback={loadMore}>
          <ArticleList articles={data.items} />
          {isFetching && <Loader />}
        </PageWrapper>
      )}
    </ContentLoader>
  )
}

export default Articles
