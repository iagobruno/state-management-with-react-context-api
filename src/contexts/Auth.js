import React from 'react'

const AuthContext = React.createContext()

export function AuthProvider (props) {
  const [user, setUser] = React.useState(null)

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
      login () {
        fetchUser().then(setUser)
      },
      logout () {
        setUser(null)
      }
    }),
    [user]
  )

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const context = React.useContext(AuthContext)
  if (!context) throw new Error(`useAuth must be used within a component that's rendered within the AuthProvider`)
  return context
}

async function fetchUser () {
  const res = await fetch('https://randomuser.me/api/')
  const data = await res.json()
  const user = data.results[0]
  return user
}

export default AuthContext
