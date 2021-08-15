import React, { useRef } from 'react'

const FocusScreen = () => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select()
    console.log(inputRef)
  }

  return (
    <div className="container mt-5">
      <h1>Focus Screen!</h1>
      <hr />

      <div className="d-flex gap-2">
        <input
          className="form-control"
          placeholder="Your name"
          ref={inputRef}
          type="text"
        />
        <button className="btn btn-primary" type="submit" onClick={handleClick}>
          Focus
        </button>
      </div>
    </div>
  )
}

export default FocusScreen

/*
Este uso de useRef no es un caso real

Podemos cambiar a lo que apunta el ref sin disparar ninguna re-renderización
*/
