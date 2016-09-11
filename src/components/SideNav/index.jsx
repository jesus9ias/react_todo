import SideNav from './SideNav';
import { connect } from 'react-redux';
import { todosActions } from '../../redux/actions';

const allActions = Object.assign({}, todosActions);

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  };
}

export const SideNavContainer = connect(mapStateToProps, allActions)(SideNav);
