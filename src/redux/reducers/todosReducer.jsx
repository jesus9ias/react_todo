import * as actions from '../allTypes';
import * as IS from '../../INITIAL_STATE';

const initialState = {
  todos: IS.todos,
  todo: IS.todo
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_TODOS:
      return {
        todos: action.todos,
        todo: state.todo
      };
    case actions.EDIT_ONE_TODO:
      return {
        todos: state.todos,
        todo: action.todo
      };
    case actions.UPDATE_ONE_TODO:
      return {
        todos: action.todos,
        todo: action.todo
      };
    case actions.DELETE_ONE_TODO:
      return {
        todos: action.todos,
        todo: state.todo
      };
    case actions.CREATE_ONE_TODO:
      return {
        todos: state.todos,
        todo: state.todo
      };
    default:
      return state;
  }
};
