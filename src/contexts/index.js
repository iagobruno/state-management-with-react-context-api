import React from 'react'
import { AuthProvider } from './Auth'

function Providers (props) {
  return (
    <AuthProvider>
      {props.children}
    </AuthProvider>
  )
}

export default Providers
