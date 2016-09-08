import Todos from './Todos';
import EditTodo from './EditTodo';
import NewTodo from './NewTodo';
import { connect } from 'react-redux';
import { todosActions } from '../../redux/actions';

const allActions = Object.assign({}, todosActions);

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  };
}

export const TodosContainer = connect(mapStateToProps, allActions)(Todos);
export const EditTodoContainer = connect(mapStateToProps, allActions)(EditTodo);
export const NewTodoContainer = connect(mapStateToProps, allActions)(NewTodo);
