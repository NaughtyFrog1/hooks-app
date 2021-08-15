import React, { useEffect } from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const MultipleCustomHook = () => {
  const counter = useCounter(1)

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter.state}`
  )

  useEffect(() => {
    if (!loading && Array.isArray(data) && data.length === 0) {
      counter.reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const quote = !!data && data[0]?.quote
  const author = !!data && data[0]?.author

  return (
    <div className="container mt-5">
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <p className="alert alert-info text-center">Loading...</p>
      ) : (
        <blockquote className="blockquote text-end animate__animated animate__fadeInUp">
          <p>{quote}</p>
          <p className="blockquote-footer">{author}</p>
        </blockquote>
      )}

      <div className="d-grid mt-4">
        <button
          className="btn btn-lg btn-outline-secondary text-center"
          onClick={counter.increment}
          disabled={loading}
        >
          +
        </button>
      </div>

      <pre className="mt-5">{`${JSON.stringify(data)} ${loading}`}</pre>
    </div>
  )
}

export default MultipleCustomHook
