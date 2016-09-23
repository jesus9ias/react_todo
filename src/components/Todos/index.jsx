import Todos from './Todos';
import EditTodo from './EditTodo';
import NewTodo from './NewTodo';
import { connect } from 'react-redux';
import { generalActions, todosActions } from '../../redux/actions';

const allActions = Object.assign({}, generalActions, todosActions);

function allProps(state) {
  const todos = state.getIn(['todos', 'todos']);
  let todosObj = {};
  let todosArr = [];
  if (todos.size) {
    todosObj = todos.toObject();
    todosArr = Object.keys(todosObj).map((k, i) => {
      return todosObj[k];
    });
  }
  const filters = state.getIn(['todos', 'filters']);
  if (filters.size && (filters.get('status').length > 0 || filters.get('priorities').length > 0)) {
    let filtersObj = filters.toObject();
    todosArr = todosArr.filter((obj, i) => {
      return filtersObj.status.indexOf(parseInt(obj.status)) != -1 || filtersObj.priorities.indexOf(parseInt(obj.priority)) != -1;
    });
  }
  return {
    todos: todosArr,
    client_data: state.getIn(['general', 'client_data'])
  };
}

function editProps(state) {
  const todo = state.getIn(['todos', 'todo']);
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
