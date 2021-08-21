import React, { useContext } from 'react'
import UserContext from './UserContext'

const HomeScreen = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <h1>HomeScreen</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default HomeScreen

/*
Con useContext(Context) accedemos a los valores del contexto  
*/
