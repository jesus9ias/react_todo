import * as actions from '../allTypes';
import * as IS from '../../INITIAL_STATE';

const initialState = {
  todos: IS.todos
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_TODOS:
      return {
        todos: action.data
      };
    default:
      return state;
  }
};
