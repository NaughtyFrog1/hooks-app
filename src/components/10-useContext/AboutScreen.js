import React, { useContext } from 'react'
import UserContext from './UserContext'

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>AboutScreen</h1>
      <hr />
      <button className="btn btn-danger" onClick={() => setUser({})}>
        Logout
      </button>
      <pre className="mt-3">{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default AboutScreen
