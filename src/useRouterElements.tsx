import { useRoutes } from 'react-router-dom'
import { PATH } from './constants/path'
import AuthLayout from './layouts/AuthLayout'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'

export default function useRouterElements() {
  const routers = useRoutes([
    {
      path: PATH.SIGNUP,
      element: (
        <AuthLayout>
          <SignUp />
        </AuthLayout>
      )
    },
    {
      path: PATH.SIGNIN,
      element: (
        <AuthLayout>
          <SignIn />
        </AuthLayout>
      )
    }
  ])

  return routers
}
