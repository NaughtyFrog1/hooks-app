import React, { useState } from 'react'
import Message from './Message'

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })

  const { name, email } = formState

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    })
  }

  return (
    <div className="container mt-5">
      <h1>useEffect</h1>
      <hr />

      <div className="d-flex gap-3 flex-row">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
          autoFocus
        ></input>

        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Your email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      {name === '123' && <Message name={name} />}
    </div>
  )
}

export default SimpleForm
