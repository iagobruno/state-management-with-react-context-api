import React from 'react'
import { useUser } from '../contexts/User'

export default function Header(props) {
  const user = useUser()

  return user.isLogged ? (
    <>
      <h1>
        Hello, {user.infos.name.first} {user.infos.name.last}
      </h1>
      <button onClick={user.logout}>Logout</button>
    </>
  ) : (
    <button onClick={user.login}>Login</button>
  )
}
