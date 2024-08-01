import { Route, Routes } from 'react-router-dom'

import { Suspense } from 'react'
import { NotFound } from 'pages/NotFound'
import { Main } from 'pages/Main'
import { About } from 'pages/About'

export const AppRouter = () => {
  return (
    <Suspense fallback={<p>...Loading...</p>}>
      <Routes>
        <Route path={'*'} element={<NotFound />} />
        <Route path={'/'} element={<Main />} />
        <Route path={'about'} element={<About />} />
      </Routes>
    </Suspense>
  )
}
