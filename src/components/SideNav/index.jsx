import SideNav from './SideNav';
import { connect } from 'react-redux';
import { todosActions, generalActions } from '../../redux/actions';

const allActions = Object.assign({}, generalActions, todosActions);

function mapStateToProps(state) {
  const todos = state.getIn(['todos', 'todos']).filter(x => x.status == 2);
  let todosObj = {};
  let todosArr = [];
  if (todos && todos.size) {
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
