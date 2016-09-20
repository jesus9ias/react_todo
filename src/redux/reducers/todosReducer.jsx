import { Map, fromJS } from 'immutable';
import * as actions from '../allTypes';
import * as IS from '../../INITIAL_STATE';

const initialState = Map({
  todos: [],
  todo: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_TODOS:
      return state.update('todos', value => Map(action.todos));
    case actions.EDIT_ONE_TODO:
      return state.update('todo', value => Map(action.todo));
    case actions.UPDATE_ONE_TODO:
      return state.update('todos', value => value.set(action.id, action.todo));
    case actions.DELETE_ONE_TODO:
      return state.update('todos', value => value.remove(action.id));
    case actions.CREATE_ONE_TODO:
      return state.update('todos', value => value.set(action.todo.id, action.todo));
    default:
      return state;
  }
};
