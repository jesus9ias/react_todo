import Home from './Home';
import { connect } from 'react-redux';
import { todosActions } from '../../redux/actions';
import { Map, fromJS, toJS } from 'immutable';

const allActions = Object.assign({}, todosActions);

function mapStateToProps(state) {
  let todos = state.getIn(['todos', 'todos']);
  return {
    todosCount: todos.size
  };
}

const HomeContainer = connect(mapStateToProps, allActions)(Home);
HomeContainer.displayName = 'Home';
export default HomeContainer;
