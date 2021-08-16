import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer'
import useForm from '../../hooks/useForm'

import './TodoApp.scss'

const initTodos = () => JSON.parse(localStorage.getItem('todos')) ?? []

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initTodos)

  const [{ newTodoDescription }, handleInputChange, clearInput] = useForm({
    newTodoDescription: '',
  })

  const handleAddTodo = (e) => {
    e.preventDefault()
    const trimedDescription = newTodoDescription.trim()

    if (trimedDescription.length < 1) return

    const newTodo = {
      id: new Date().getTime(),
      desc: trimedDescription,
      done: false,
    }

    dispatch({ type: 'add', payload: newTodo })
    clearInput()
  }

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
        <form className="todo-add d-flex gap-3 mb-5" onSubmit={handleAddTodo}>
          <input
            autoComplete="off"
            autoFocus
            className="form-control"
            name="newTodoDescription"
            placeholder="Add todo..."
            type="text"
            value={newTodoDescription}
            onChange={handleInputChange}
          />
          <button className="btn btn-sm btn-outline-success" type="submit">
            &#10142;
          </button>
        </form>

        <ul className="list-group todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item todo-list__item"
              onClick={() => {
                dispatch({ type: 'toggle', payload: todo.id })
              }}
            >
              <span
                className={`fs-4 ${
                  todo.done && 'text-decoration-line-through text-muted'
                }`}
              >
                {todo.desc}
              </span>

              <button
                type="button"
                className=" todo-list__btn btn btn-sm btn-outline-danger"
                onClick={() => {
                  dispatch({ type: 'delete', payload: todo.id })
                }}
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
