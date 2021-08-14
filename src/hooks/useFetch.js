import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const initialState = {
  data: null,
  loading: true,
  error: null,
}

const useFetch = (url) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState(initialState)

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          data,
          loading: false,
          error: null,
        })
      })
  }, [url])

  return state
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
}

export default useFetch
