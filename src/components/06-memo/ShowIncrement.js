import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {
  console.log('Render <ShowIncrement />');

  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      +
    </button>
  )
})

export default ShowIncrement
