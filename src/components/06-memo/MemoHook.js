import React, { useMemo, useState } from 'react'
import useCounter from '../../hooks/useCounter'

const procesoPesado = (iteraciones) => {
  for (let i = 0; i < iteraciones; i++) {
    console.log('Iterando...')
  }

  return `${iteraciones} iteraciones realizadas`
}

const MemoHook = () => {
  const { state, increment } = useCounter(1000)
  const [show, setShow] = useState(true)

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

  return (
    <div className="container mt-5">
      <h1>MemoHook</h1>
      <hr />
      <h2>
        Counter: <small>{state}</small>
      </h2>

      <p className="my-3">{memoProcesoPesado}</p>

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

export default MemoHook
