import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/scss/bootstrap.scss'

// import App from './App'
// import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'

ReactDOM.render(<CounterWithCustomHook />, document.querySelector('#root'))
