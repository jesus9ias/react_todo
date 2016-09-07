import Todos from './Todos';
import { connect } from 'react-redux';
import { todosActions } from '../../redux/actions';

const allActions = Object.assign({}, todosActions);

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  };
}

const TodosContainer = connect(mapStateToProps, allActions)(Todos);
TodosContainer.displayName = 'Todos';
export default TodosContainer;
