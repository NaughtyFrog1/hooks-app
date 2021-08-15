import React from 'react'

const Small = React.memo(({ value }) => {
  console.log('from <Small />')

  return <small className="text-primary">{value}</small>
})

export default Small
