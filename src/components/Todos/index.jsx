import Todos from './Todos';
import EditTodo from './EditTodo';
import NewTodo from './NewTodo';
import { connect } from 'react-redux';
import { generalActions, todosActions } from '../../redux/actions';

const allActions = Object.assign({}, generalActions, todosActions);

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
    client_data: state.general.client_data
  };
}

export const TodosContainer = connect(mapStateToProps, allActions)(Todos);
export const EditTodoContainer = connect(mapStateToProps, allActions)(EditTodo);
export const NewTodoContainer = connect(mapStateToProps, allActions)(NewTodo);
