import './styles/index.scss'

import { Suspense } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from 'app/providers/router'
import { Loader } from 'shared/ui/Loader/Loader.tsx'

export const App = () => {
  return (
    <div className={'app'}>
      <Suspense fallback={<Loader />}>
        <Navbar />

        <div className={'main-content'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
