import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  const clear = () => {
    setValues(initialState)
  }

  return [values, handleInputChange, clear]
}

export default useForm
