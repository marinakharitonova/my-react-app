import './styles/index.scss'

import classNames from 'classnames'

import { Suspense } from 'react'

import { useTheme } from 'shared/themes/useTheme.ts'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from 'app/providers/router'
import { Loader } from 'shared/ui/Loader/Loader.tsx'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', theme)}>
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
