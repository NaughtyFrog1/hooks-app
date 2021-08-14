import React, { useEffect } from 'react'

const Message = ({ name }) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log('Mouse moved!');
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="mt-4 ms-3">
      <h3>Hola, {name}!</h3>
    </div>
  )
}

export default Message
