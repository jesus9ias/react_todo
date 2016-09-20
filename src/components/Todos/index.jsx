import Todos from './Todos';
import EditTodo from './EditTodo';
import NewTodo from './NewTodo';
import { connect } from 'react-redux';
import { generalActions, todosActions } from '../../redux/actions';

const allActions = Object.assign({}, generalActions, todosActions);

function allProps(state) {
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
    client_data: state.getIn(['general', 'client_data'])
  };
}

function editProps(state) {
  let todo = state.getIn(['todos', 'todo']);
  let todoObj = {};
  let todoArr = [];
  if (todo.size) {
    todoObj = todo.toObject();
  }
  return {
    todo: todoObj,
  };
}

function newProps(state) {
  return {};
}

export const TodosContainer = connect(allProps, allActions)(Todos);
export const EditTodoContainer = connect(editProps, allActions)(EditTodo);
export const NewTodoContainer = connect(newProps, allActions)(NewTodo);
