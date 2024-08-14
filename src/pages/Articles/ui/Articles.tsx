import { useState } from 'react'
import { useGetArticlesListQuery } from 'entities/Article/api'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList.tsx'
import { ContentLoader } from 'shared/ui/ContentLoader/ContentLoader.tsx'
import { ARTICLE_LIST_LIMIT } from 'entities/Article/model/constants.ts'
import { Loader } from 'shared/ui/Loader/Loader.tsx'

const Articles = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, isFetching } = useGetArticlesListQuery({
    page,
    limit: ARTICLE_LIST_LIMIT,
  })

  return (
    <ContentLoader isLoading={isLoading} isError={isError}>
      {data?.items && (
        <div>
          <ArticleList articles={data.items} />
          {isFetching && <Loader />}
          <button onClick={() => setPage(page + 1)}>Load More</button>
        </div>
      )}
    </ContentLoader>
  )
}

export default Articles
