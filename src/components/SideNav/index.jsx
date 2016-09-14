import SideNav from './SideNav';
import { connect } from 'react-redux';
import { todosActions, generalActions } from '../../redux/actions';

const allActions = Object.assign({}, generalActions, todosActions);

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
    isOpenSidenav: state.general.isOpenSidenav
  };
}

export const SideNavContainer = connect(mapStateToProps, allActions)(SideNav);
