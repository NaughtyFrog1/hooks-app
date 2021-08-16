import React from 'react'
import useForm from '../../hooks/useForm'
import PropTypes from 'prop-types'

const TodoAdd = ({ dispatch }) => {
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

  return (
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
  )
}

TodoAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default TodoAdd
