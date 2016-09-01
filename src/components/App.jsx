import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import StorageApi from './Utils/StorageApi';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isOpenSidenav: false
    };
    this.getAllTodos = this.getAllTodos.bind(this);
    this.openSidenav = this.openSidenav.bind(this);
    this.closeSidenav = this.closeSidenav.bind(this);
  }

  getChildContext() {
    return {
      getAllTodos: this.getAllTodos,
      todos: this.state.todos,
      openSidenav: this.openSidenav,
      closeSidenav: this.closeSidenav
    };
  }

  getAllTodos(status_filter = [], priorities_filter = []) {
    this.setState({todos: StorageApi.getTodos(status_filter, priorities_filter)});
  }

  openSidenav() {
    this.setState({isOpenSidenav: true});
  }

  closeSidenav() {
    this.setState({isOpenSidenav: false});
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <SideNav isOpenSidenav={this.state.isOpenSidenav} todos={this.state.todos} />
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
  todos: React.PropTypes.array,
  openSidenav: React.PropTypes.func,
  closeSidenav: React.PropTypes.func,
};

export default App;
