import storage from 'key-storage';
import INITIAL_STATE from '../../INITIAL_STATE'

class StorageApi {

  _parse(data) {
    return JSON.parse(data);
  }

  _stringify(data) {
    return JSON.stringify(data);
  }

  _updateNextId() {
    let id = storage.get('todoNextId') || INITIAL_STATE.todoNextId;
    storage.set('todoNextId', id - -1);
    return id;
  }

  getTodos() {
    let todos = this._parse(storage.get('todos')) || INITIAL_STATE.todos;
    return todos;
  }

  setTodos(data) {
    storage.set('todos', this._stringify(data));
    return;
  }

  createTodo(todo) {
    let todos = this.getTodos();
    todo.id = this._updateNextId();
    todos.push(todo);
    this.setTodos(todos);
    return todo.id;
  }

  deleteTodo(index) {
    let todos = this.getTodos();
    todos.splice(index, 1);
    this.setTodos(todos);
  }

  getTodo(id) {
    let todos = this.getTodos();
    let todo = todos.filter((obj, i) => {
      obj.key = i;
      return obj.id == id;
    });
    return todo[0];
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
export default new StorageApi();
