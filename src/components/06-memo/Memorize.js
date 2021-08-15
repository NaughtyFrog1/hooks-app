import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import Small from './Small'

const Memorize = () => {
  const { state, increment } = useCounter(10)
  const [show, setShow] = useState(true)

  return (
    <div className="container mt-5">
      <h1>Memorize</h1>
      <hr />
      <h2>
        Counter: <Small value={state} />
      </h2>

      <div className="d-flex gap-3">
        <button className="btn btn-primary" onClick={increment}>
          +
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            setShow(!show)
          }}
        >
          {show ? 'hide' : 'show'}
        </button>
      </div>
    </div>
  )
}

export default Memorize
