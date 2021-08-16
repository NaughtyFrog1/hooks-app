import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({ todo, dispatch }) => {
  return (
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
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default TodoListItem
