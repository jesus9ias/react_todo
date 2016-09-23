import * as actions from '../allTypes';
//import StorageApi from '../../components/Utils/StorageApi';
import FirebaseApi from '../../components/Utils/FirebaseApi';

export default {
  getAllTodos: () => (dispatch) => {
    let todosPromise =  FirebaseApi.getTodos();
    todosPromise.then((todos) => {
      if (todos) {
        dispatch({ type: actions.GET_ALL_TODOS, todos: todos });
      } else {
        dispatch({ type: actions.GET_ALL_TODOS, todos: [] });
      }
    });
  },
  editTodo: (id) => (dispatch) => {
    let todoPromise =  FirebaseApi.getTodo(id);
    todoPromise.then((todo) => {
      dispatch({ type: actions.EDIT_ONE_TODO, todo: todo });
    });
  },
  updateTodo: (id, todo) => (dispatch) => {
    let todoPromise = FirebaseApi.updateTodo(id, todo);
    todoPromise.then(() => {
      dispatch({ type: actions.UPDATE_ONE_TODO, id: id, todo: todo });
      dispatch({ type: actions.EDIT_ONE_TODO, todo: todo });
    });
  },
  deleteTodo: (id) => (dispatch) => {
    let todoPromise =  FirebaseApi.deleteTodo(id);
    todoPromise.then(() => {
      dispatch({ type: actions.DELETE_ONE_TODO, id: id });
    });
  },
  createTodo: (todo) => (dispatch) => {
    let newId =  FirebaseApi.createTodo(todo);
    todo.id = newId;
    dispatch({ type: actions.CREATE_ONE_TODO, todo: todo });
  },
  filterTodos: (status, priorities) => (dispatch) => {
    dispatch({ type: actions.FIlTER_TODOS, status, priorities });
  }
};

/*export default {
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
};*/
