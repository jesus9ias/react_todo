import * as actions from '../allTypes';
import StorageApi from '../../components/Utils/StorageApi';

export default {
  getAllTodos: (status_filter, priorities_filter) => (dispatch) => {
    let todos =  StorageApi.getTodos(status_filter, priorities_filter);
    dispatch({ type: actions.GET_ALL_TODOS, data: todos });
  },
  cretaeTodo: (userData) => (dispatch) => {

  }
};
