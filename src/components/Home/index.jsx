import Home from './Home';
import { connect } from 'react-redux';
import { todosActions } from '../../redux/actions';

const allActions = Object.assign({}, todosActions);

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  };
}

const HomeContainer = connect(mapStateToProps, allActions)(Home);
HomeContainer.displayName = 'Home';
export default HomeContainer;
