import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = ({ todos, toggleToDo }) => (
  <ul>
    {todos.map(todo =>
      <ToDo
        key={todo.id}
        {...todo}
        onClick={() => toggleToDo(todo.id)}
      />
    )}
  </ul>
)

ToDoList.defaultProps = {
    toggleToDo : undefined,
}


ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func
}

export default ToDoList