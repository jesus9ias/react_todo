import SideNav from './SideNav';
import { connect } from 'react-redux';
import { todosActions, generalActions } from '../../redux/actions';

const allActions = Object.assign({}, generalActions, todosActions);

function mapStateToProps(state) {
  let todos = state.getIn(['todos', 'todos']);
  let todosObj = {};
  let todosArr = [];
  if (todos.length != 0) {
    todosObj = todos.toObject();
    todosArr = Object.keys(todosObj).map((k, i) => {
      return todosObj[k];
    });
  }

  return {
    todos: todosArr,
    isOpenSidenav: state.getIn(['general', 'isOpenSidenav'])
  };
}

export const SideNavContainer = connect(mapStateToProps, allActions)(SideNav);
