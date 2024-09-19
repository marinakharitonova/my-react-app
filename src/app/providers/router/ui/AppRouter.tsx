import { Route, Routes } from 'react-router-dom'

import { Suspense } from 'react'
import { NotFound } from 'pages/NotFound'

import { About } from 'pages/About'
import { Main } from 'pages/Main'
import { AppRoutes } from 'shared/consts/interface.ts'
import { PrivateRoute } from '../ui/PrivateRoute.tsx'
import { Profile } from 'pages/Profile'
import { Articles } from 'pages/Articles'
import { ArticleDetail } from 'pages/ArticleDetail'
import { Loader } from 'shared/ui/Loader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<Main />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
        <Route
          path={AppRoutes.PROFILE}
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.ARTICLES}
          element={
            <PrivateRoute>
              <Articles />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoutes.ARTICLES_DETAIL}:articleId`}
          element={
            <PrivateRoute>
              <ArticleDetail />
            </PrivateRoute>
          }
        />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
