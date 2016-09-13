import * as actions from '../allTypes';
import StorageApi from '../../components/Utils/StorageApi';

export default {
  getAllTodos: (status_filter, priorities_filter) => (dispatch) => {
    let todos =  StorageApi.getTodos(status_filter, priorities_filter);
    dispatch({ type: actions.GET_ALL_TODOS, todos: todos });
  },
  editTodo: (id) => (dispatch) => {
    let todo =  StorageApi.getTodo(id);
    dispatch({ type: actions.EDIT_ONE_TODO, todo: todo });
  },
  updateTodo: (id, todo) => (dispatch) => {
    let todos = StorageApi.updateTodo(id, todo);
    dispatch({ type: actions.UPDATE_ONE_TODO, todos: todos, todo: todo });
  },
  deleteTodo: (id) => (dispatch) => {
    let todos =  StorageApi.deleteTodo(id);
    dispatch({ type: actions.DELETE_ONE_TODO, todos: todos });
  },
  createTodo: (todo) => (dispatch) => {
    let result =  StorageApi.createTodo(todo);
    dispatch({ type: actions.CREATE_ONE_TODO, todos: result.todos });
  }
};
