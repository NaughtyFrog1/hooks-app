import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const increment = useCallback((factor) => {
    setCounter((prevCounter) => prevCounter + factor)
  }, [setCounter])

  return (
    <div className="container mt-5">
      <h1>CallbackHook</h1>
      <hr />
      <h2>
        Counter: <small className="text-primary">{counter}</small>
      </h2>
      <ShowIncrement increment={increment} />
    </div>
  )
}

export default CallbackHook
