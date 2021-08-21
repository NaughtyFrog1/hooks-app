import React, { useContext } from 'react'
import UserContext from './UserContext'

const LoginScreen = () => {
  const { setUser } = useContext(UserContext)

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 1, nombre: 'Fernando' })}
      >
        Login
      </button>
    </>
  )
}

export default LoginScreen
