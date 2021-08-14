import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterWithCustomHook = () => {
  const counter1 = useCounter(10)
  const counter2 = useCounter(20, 2)

  return (
    <div className="container mt-5">
      <h1>
        Counter1: <span className="text-primary">{counter1.state}</span>
      </h1>

      <h1>
        Counter1: <span className="text-danger">{counter2.state}</span>
      </h1>
      <hr />

      <div className="d-flex gap-2 mt-2">
        <button
          className="btn btn-primary"
          onClick={counter1.decrement}
        >
          -1
        </button>

        <button className="btn btn-primary" onClick={counter1.reset}>
          reset
        </button>

        <button
          className="btn btn-primary"
          onClick={counter1.increment}
        >
          +1
        </button>
      </div>

      <div className="d-flex gap-2 mt-2">
        <button
          className="btn btn-danger"
          onClick={counter2.decrement}
        >
          -1
        </button>

        <button className="btn btn-danger" onClick={counter2.reset}>
          reset
        </button>

        <button
          className="btn btn-danger"
          onClick={counter2.increment}
        >
          +1
        </button>
      </div>
    </div>
  )
}

export default CounterWithCustomHook
