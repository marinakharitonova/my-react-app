import './styles/index.scss'

import { Suspense, useEffect } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from 'app/providers/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { authUserInitiated } from 'entities/User'
import { Loader } from 'shared/ui/Loader'
import { useAppDispatch } from 'shared/hooks/useStore.ts'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authUserInitiated())
  }, [])

  return (
    <div className={'app'}>
      <Suspense fallback={<Loader />}>
        <Navbar />

        <div className={'main-content'}>
          <Sidebar />
          <AppRouter />
        </div>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </Suspense>
    </div>
  )
}
