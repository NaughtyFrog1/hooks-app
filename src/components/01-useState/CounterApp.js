import React, { useState } from 'react'

const CounterApp = () => {
  const [{ counter1, counter2 }, setState] = useState({
    counter1: 10,
    counter2: 20,
  })

  return (
    <div className="container mt-5">
      <h1>
        Counter1: <span className="text-primary">{counter1}</span>
      </h1>
      <h1>
        Counter2: <span className="text-primary">{counter2}</span>
      </h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setState((prevState) => ({ ...prevState, counter1: counter1 + 1 }))
        }
      >
        +1
      </button>
    </div>
  )
}

export default CounterApp
