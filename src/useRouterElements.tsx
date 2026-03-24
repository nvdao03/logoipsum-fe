import { useRoutes } from 'react-router-dom'
import { PATH } from './constants/path'
import AuthLayout from './layouts/AuthLayout'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import ForgotPassword from './pages/auth/ForgotPassword'
import MainLayout from './layouts/MainLayout'
import Home from './pages/shop/Home'

export default function useRouterElements() {
  const routers = useRoutes([
    {
      path: PATH.HOME,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
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
    },
    {
      path: PATH.FORGOT_PASSWORD,
      element: (
        <AuthLayout>
          <ForgotPassword />
        </AuthLayout>
      )
    }
  ])

  return routers
}
