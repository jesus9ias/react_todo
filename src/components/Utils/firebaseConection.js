import fbConfig from '../../fbConfig';
import firebase from 'firebase';

firebase.initializeApp(fbConfig);
let DB = firebase.database();
let allTodos = DB.ref('todos');

function oneTodo(id) {
  return DB.ref(`todos/${id}/`);
}

export default {
  DB,
  allTodos,
  oneTodo
};
