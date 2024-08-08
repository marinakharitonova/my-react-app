import { Route, Routes } from 'react-router-dom'

import { Suspense } from 'react'
import { NotFound } from 'pages/NotFound'

import { About } from 'pages/About'
import { Loader } from 'shared/ui/Loader/Loader.tsx'
import { Main } from 'pages/Main'
import { Profile } from 'pages/Profile'
import { AppRoutes } from '../types/interface.ts'

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={'*'} element={<NotFound />} />
        <Route path={AppRoutes.MAIN} element={<Main />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
        <Route path={AppRoutes.PROFILE} element={<Profile />} />
      </Routes>
    </Suspense>
  )
}
