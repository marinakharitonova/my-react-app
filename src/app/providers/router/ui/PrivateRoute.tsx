import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'app/providers/StoreProvider'
import { selectAuthUser } from 'entities/User'
import { AppRoutes } from 'app/providers/router'
import { ReactNode } from 'react'

export const PrivateRoute = ({ children }: { children?: ReactNode }) => {
  const authUser = useAppSelector(selectAuthUser)
  return authUser ? <>{children}</> : <Navigate to={AppRoutes.MAIN} />
}
