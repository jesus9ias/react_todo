import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import StorageApi from './Utils/StorageApi';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.getAllTodos = this.getAllTodos.bind(this);
  }

  getChildContext() {
    return {
      getAllTodos: this.getAllTodos,
      todos: this.state.todos
    };
  }

  getAllTodos() {
    this.setState({todos: StorageApi.getTodos()});
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <SideNav />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

App.childContextTypes = {
  getAllTodos: React.PropTypes.func,
  todos: React.PropTypes.array
};

export default App;
