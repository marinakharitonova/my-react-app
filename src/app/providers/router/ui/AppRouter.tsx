import { Route, Routes } from 'react-router-dom'

import { Suspense } from 'react'
import { NotFound } from 'pages/NotFound'

import { About } from 'pages/About'
import { Loader } from 'shared/ui/Loader/Loader.tsx'
import { Main } from 'pages/Main'
import { AppRoutes } from '../types/interface.ts'
import { PrivateRoute } from 'app/providers/router/ui/PrivateRoute.tsx'
import { Profile } from 'pages/Profile'

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={'*'} element={<NotFound />} />
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
      </Routes>
    </Suspense>
  )
}
