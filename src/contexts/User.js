import React from 'react'

const UserContext = React.createContext()

export function UserProvider(props) {
  const [user, setUser] = React.useState(undefined)

  React.useEffect(() => {
    fetchUser().then(setUser)
  }, [])

  /**
   * Use "useMemo" hook to avoid unnecessary renders of consumers.
   * @see https://reactjs.org/docs/context.html#caveats
   */
  const context = React.useMemo(
    () => ({
      infos: user,
      isLogged: !!user,
      login() {
        fetchUser().then(setUser)
      },
      logout() {
        setUser(undefined)
      }
    }),
    [user]
  )

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = React.useContext(UserContext)
  if (!context)
    throw new Error(
      `useUser must be used within a component that's rendered within the UserProvider`
    )
  return context
}

async function fetchUser() {
  const res = await fetch('https://randomuser.me/api/')
  const data = await res.json()
  const user = data.results[0]
  return user
}

export default UserContext
