import React, { useState } from 'react'
import AppRouter from './AppRouter'
import UserContext from './UserContext'

const App = () => {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  )
}

export default App

/*
El UserContext es un higher order component, un componente que tiene otros componentes dentro. 
La propiedad value es la información a compartir
  
. Todos los componentes dentro del UserContext pueden acceder a los valores del context 

Si pasamos un estado como valor del contexto, entonces esté estará pendiente de los cambios y notificará a sus hijos en caso de ocurrir un cambio
*/
