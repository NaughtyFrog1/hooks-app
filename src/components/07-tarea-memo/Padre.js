import React, { useCallback } from 'react'
import Hijo from './Hijo'
import { useState } from 'react'

const Padre = () => {
  const numbers = [2, 4, 6, 8, 10]
  const [valor, setValor] = useState(0)

  const incrementar = useCallback((num) => {
    setValor((prevValor) => prevValor + num)
  }, [setValor])

  return (
    <div className="container mt-5">
      <h1>Padre</h1>
      <hr />
      <h2>
        {' '}
        Total: <small className="text-primary">{valor}</small>
      </h2>

      <div className="d-flex gap-2 mt-4">
        {numbers.map((n) => (
          <Hijo key={n} numero={n} incrementar={incrementar} />
        ))}
      </div>
    </div>
  )
}

export default Padre
