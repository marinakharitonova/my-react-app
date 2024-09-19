import { Navigate } from 'react-router-dom'
import { selectAuthUser } from 'entities/User'
import { AppRoutes } from 'shared/consts/interface.ts'
import { ReactNode } from 'react'
import { useAppSelector } from 'shared/hooks/useStore.ts'

export const PrivateRoute = ({ children }: { children?: ReactNode }) => {
  const authUser = useAppSelector(selectAuthUser)
  return authUser ? <>{children}</> : <Navigate to={AppRoutes.MAIN} />
}
