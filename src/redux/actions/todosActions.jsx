import * as actions from '../allTypes';
//import StorageApi from '../../components/Utils/StorageApi';
import FirebaseApi from '../../components/Utils/FirebaseApi';

export default {
  getAllTodos: (status_filter, priorities_filter) => (dispatch) => {
    let todosPromise =  FirebaseApi.getTodos(status_filter, priorities_filter);
    todosPromise.then((todos) => {
      if (todos) {
        const todosArr = Object.keys(todos).map((k) => {
          todos[k].id = k;
          return todos[k];
        });
        dispatch({ type: actions.GET_ALL_TODOS, todos: todosArr });
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
    let todos = FirebaseApi.updateTodo(id, todo);
    dispatch({ type: actions.UPDATE_ONE_TODO, todos: todos, todo: todo });
  },
  deleteTodo: (id) => (dispatch) => {
    let todos =  FirebaseApi.deleteTodo(id);
    dispatch({ type: actions.DELETE_ONE_TODO, todos: todos });
  },
  createTodo: (todo) => (dispatch) => {
    let newId =  FirebaseApi.createTodo(todo);
    todo.id = newId;
    dispatch({ type: actions.CREATE_ONE_TODO, todo: todo });
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
