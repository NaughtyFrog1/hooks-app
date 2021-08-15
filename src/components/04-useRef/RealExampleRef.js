import React, { useState } from 'react'
import MultipleCustomHook from '../03-examples/MultipleCustomHook'

const RealExampleRef = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="container mt-5">
      <h1>Real Example Ref</h1>
      <hr />

      {show && <MultipleCustomHook />}

      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show)
        }}
      >
        Toggle
      </button>
    </div>
  )
}

export default RealExampleRef
