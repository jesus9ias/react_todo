import storage from 'key-storage';
import INITIAL_STATE from '../../INITIAL_STATE';
import fbConfig from '../../fbConfig';
import firebase from 'firebase';

firebase.initializeApp(fbConfig);
var DB = firebase.database();

class FirebaseApi {

  constructor() {

  }

  getTodos(status_filter = [], priorities_filter = []) {
    return DB.ref('todos').once('value').then((snapshot) => {
      return snapshot.val();
    });
  }

  useFilters(todos, status_filter = [], priorities_filter = []) {
    todos = todos.filter((obj, i) => {
      return status_filter.indexOf(parseInt(obj.status)) != -1 || priorities_filter.indexOf(parseInt(obj.priority)) != -1;
    });
    return todos;
  }

  getTodo(id) {
    return DB.ref(`todos/${id}/`).once('value').then((snapshot) => {
      return snapshot.val();
    });
  }

  createTodo(todo) {
    let newTodo = DB.ref('todos').push();
    let newId = newTodo.getKey()
    newTodo.set(todo);
    return newId;
  }

  deleteTodo(id) {
    let todos = this.getTodos();
    let index;
    todos.forEach((obj, i) => {
      if (obj.id == id) {
        index = i;
      }
    });
    todos.splice(index, 1);
    this.setTodos(todos);
    return todos;
  }

  updateTodo(id, todo) {
    let todos = this.getTodos();
    todos.forEach((obj, i) => {
      if (obj.id == id) {
        todos[i] = todo;
        this.setTodos(todos);
      }
    });
    return todos;
  }

  getKey(key) {
    return storage.gey(key);
  }

  setKey(key, val) {
    storage.set(key, val);
    return;
  }

  deleteKey(key) {
    storage.remove(key);
    return;
  }

}
export default new FirebaseApi();
