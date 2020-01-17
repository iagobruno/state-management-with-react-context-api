import React from 'react'
import { UserProvider } from './User'

function Providers(props) {
  return (
    <>
      <UserProvider>{props.children}</UserProvider>
    </>
  )
}

export default Providers
