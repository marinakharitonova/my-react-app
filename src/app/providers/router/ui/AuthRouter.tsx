import { Route } from 'react-router-dom'
import { AppRoutes } from 'app/providers/router'
import { Profile } from 'pages/Profile'

export const AuthRouter = () => {
  return <Route path={AppRoutes.PROFILE} element={<Profile />} />
}
