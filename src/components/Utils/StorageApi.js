import storage from 'key-storage';

class StorageApi {
  _parse(data) {
    return JSON.parse(data);
  }

  _stringify(data) {
    return JSON.stringify(data);
  }

  getTodos() {
    let todos = JSON.parse(storage.get('todos'));
    return todos;
  }

  setTodos(data) {
    storage.set('todos', JSON.stringify(data));
    return;
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
