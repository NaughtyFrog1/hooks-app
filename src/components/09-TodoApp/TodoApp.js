import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

import './TodoApp.scss'

const initTodos = () => JSON.parse(localStorage.getItem('todos')) ?? []

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initTodos)

  useEffect(() => {
    document.title = 'TodoApp'
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <nav className="navbar navbar-dark bg-dark shadow">
        <div className="container">
          <span className="navbar-brand mb-0 h1 fs-3">TodoApp</span>
        </div>
      </nav>

      <div className="container mt-5" style={{ maxWidth: '600px' }}>
        <TodoAdd dispatch={dispatch} />
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    </>
  )
}

export default TodoApp
