import { connect } from 'react-redux'
import { toggleToDo } from '../actions/Actions'
import ToDoList from '../components/ToDoList'
import { VisibilityFilters } from '../actions/Actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.rajat, state.VisibilityFilter)
})
// function mapStateToProps(state){
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
// }
const mapDispatchToProps = dispatch => ({
    toggleToDo: id => dispatch(toggleToDo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)