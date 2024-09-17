import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../StoreProvider/config/hooks.ts'
import { selectAuthUser } from 'entities/User'
import { AppRoutes } from '../types/interface.ts'
import { ReactNode } from 'react'

export const PrivateRoute = ({ children }: { children?: ReactNode }) => {
  const authUser = useAppSelector(selectAuthUser)
  return authUser ? <>{children}</> : <Navigate to={AppRoutes.MAIN} />
}
