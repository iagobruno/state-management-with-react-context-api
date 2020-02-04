import React from 'react'
import { useAuth } from '../contexts/Auth'

export default function Header (props) {
  const user = useAuth()

  return user.isLogged ? (
    <>
      <h1>Hello, {user.infos.name.first} {user.infos.name.last}</h1>
      <button onClick={user.logout}>Logout</button>
    </>
  ) : (
      <button onClick={user.login}>Login</button>
    )
}
