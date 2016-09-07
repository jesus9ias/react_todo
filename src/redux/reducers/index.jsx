import { combineReducers } from 'redux';
import general from './generalReducer';
import todos from './todosReducer';


const theApp = combineReducers({
  general,
  todos
});

export default theApp;
