import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, dispatch }) => {
  if (todos.length === 0) {
    return <p className="text-secondary text-center">Add new todos</p>
  }

  return (
    <ul className="list-group todo-list">
      {todos.map((todo) => (
        <TodoListItem todo={todo} dispatch={dispatch} key={todo.id} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default TodoList
