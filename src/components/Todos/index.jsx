import React from 'react';
import StorageApi from '../Utils/StorageApi';
import OneTodo from './OneTodo';

class Todos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: []}
    this.getAllTodos = this.getAllTodos.bind(this);
    this.deleteOneTodo = this.deleteOneTodo.bind(this);
  }

  getChildContext() {
    return {getAllTodos: this.getAllTodos};
  }

  componentWillMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    this.setState({todos: StorageApi.getTodos()});
  }

  deleteOneTodo(index) {
    StorageApi.deleteTodo(index);
    this.getAllTodos();
  }

  render() {
    return (
      <div className="todos">
        {this.props.new}
        Todos
        {
          this.state.todos.map((t, index) => {
            return (
              <OneTodo
                key={index}
                index={index}
                todo={t}
                deleteOneTodo={this.deleteOneTodo}
              />
            );
          })
        }
        {this.props.edit}
      </div>
    );
  }
}

Todos.childContextTypes = {
  getAllTodos: React.PropTypes.func
};

export default Todos;
