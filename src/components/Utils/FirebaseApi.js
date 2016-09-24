import storage from 'key-storage';
import INITIAL_STATE from '../../INITIAL_STATE';
import fbConfig from '../../fbConfig';
import firebase from 'firebase';

firebase.initializeApp(fbConfig);
var DB = firebase.database();

class FirebaseApi {

  getTodos(status_filter = [], priorities_filter = []) {
    return DB.ref('todos').once('value').then((snapshot) => {
      return snapshot.val();
    });
  }

  getTodo(id) {
    return DB.ref(`todos/${id}/`).once('value').then((snapshot) => {
      return snapshot.val();
    });
  }

  createTodo(todo) {
    let newTodo = DB.ref('todos').push();
    let newId = newTodo.getKey();
    todo.id = newId;
    newTodo.set(todo);
    return newId;
  }

  deleteTodo(id) {
    return DB.ref(`todos/${id}`).remove();
  }

  updateTodo(id, todo) {
    return DB.ref(`todos/${id}`).update(todo);
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
