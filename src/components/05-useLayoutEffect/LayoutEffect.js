import React, { useLayoutEffect, useRef } from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const LayoutEffect = () => {
  const counter = useCounter(1)

  if (counter.state === 31) {
    counter.reset()
  }

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter.state}`
  )

  const { quote, author } = !!data && data[0]

  const quoteTag = useRef()

  useLayoutEffect(() => {
    console.log(quoteTag.current.getBoundingClientRect());
  }, [quote])

  return (
    <div className="container mt-5">
      <h1>LayOutEffect</h1>
      <hr />

      <blockquote ref={quoteTag} className="blockquote text-end animate__animated animate__fadeInUp">
        <p>{quote}</p>
        <p className="blockquote-footer">{author}</p>
      </blockquote>

      <div className="d-grid mt-4">
        <button
          className="btn btn-lg btn-outline-secondary text-center"
          onClick={counter.increment}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default LayoutEffect
