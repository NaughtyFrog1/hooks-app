import { useState } from 'react'

const useCounter = (initialState = 0, factor = 1) => {
  const [state, setState] = useState(initialState)

  const increment = () => {
    setState(state + factor)
  }

  const decrement = () => {
    setState(state - factor)
  }

  const reset = () => {
    setState(initialState)
  }

  return { state, increment, decrement, reset }
}

export default useCounter
