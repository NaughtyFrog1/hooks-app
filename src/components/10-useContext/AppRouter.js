import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AboutScreen from './AboutScreen'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'

const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/about" component={AboutScreen}/>
          <Route path="/login" component={LoginScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </>
    </Router>
  )
}

export default AppRouter

/*
Una aplicación puede tener tantos routers como sean necesarios.

El <Switch> muestra la primer opción que coincida con el path. Si pusiéramos primero <Route path="/" component={HomeScreen} />, entonces siempre se mostraría el <HomeScreen /> ya que todas las rutas comienzan con /

Para prevenir este comportamiento podemos agregar la propiedad `exact` al <Route />. De esta manera se muestra solo si el path coincide exactamente con el path de la url
*/