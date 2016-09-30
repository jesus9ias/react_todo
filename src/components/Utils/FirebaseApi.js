import storage from 'key-storage';
import INITIAL_STATE from '../../INITIAL_STATE';
import {DB, allTodos, oneTodo} from './firebaseConection';

class FirebaseApi {

  getTodos(status_filter = [], priorities_filter = []) {
    return allTodos.once('value').then((snapshot) => {
      return snapshot.val();
    });
  }

  getTodo(id) {
    return oneTodo(id).once('value').then((snapshot) => {
      return snapshot.val();
    });
  }

  createTodo(todo) {
    let newTodo = allTodos.push();
    let newId = newTodo.getKey();
    todo.id = newId;
    newTodo.set(todo);
    return newId;
  }

  deleteTodo(id) {
    return oneTodo(id).remove();
  }

  updateTodo(id, todo) {
    return oneTodo(id).update(todo);
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
