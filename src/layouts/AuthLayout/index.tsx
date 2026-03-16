import React from 'react'

interface PropTypes {
  children: React.ReactNode
}

function AuthLayout({ children }: PropTypes) {
  return <div>{children}</div>
}

export default AuthLayout
