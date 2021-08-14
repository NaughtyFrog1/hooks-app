import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm'

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formValues

  useEffect(() => {
    console.log('Email changed')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <div className="container mt-5">
      <h1>useEffect - formWit</h1>
      <hr />

      <form
        className="d-flex gap-3 flex-column flex-md-row"
        onSubmit={handleSubmit}
      >
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

        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Your password"
          value={password}
          onChange={handleInputChange}
        ></input>

        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )
}

export default FormWithCustomHook
