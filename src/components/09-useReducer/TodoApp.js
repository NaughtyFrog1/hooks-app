import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer'

import './TodoApp.scss'

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false,
  },
]

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  useEffect(() => {
    document.title = 'TodoApp'
    console.log('title changed')
  }, [])

  return (
    <>
      <nav className="navbar navbar-dark bg-dark shadow">
        <div className="container">
          <span className="navbar-brand mb-0 h1 fs-3">TodoApp</span>
        </div>
      </nav>

      <div className="container mt-5" style={{ maxWidth: '600px' }}>
        <form className="todo-add d-flex gap-3 mb-5">
          <input
            type="text"
            className="form-control"
            placeholder="Add todo..."
          />
          <button className="btn btn-sm btn-outline-success" type="submit">
            &#10142;
          </button>
        </form>

        <ul className="list-group todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item todo-list__item">
              <span className="fs-4">{todo.desc}</span>

              <button
                type="button"
                className=" todo-list__remove btn btn-sm btn-outline-danger"
              >
                &#10005;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodoApp
