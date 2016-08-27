import React from 'react';
import { Link } from 'react-router';
import StorageApi from '../Utils/StorageApi';
import OneTodo from './OneTodo';

class Todos extends React.Component {

  constructor(props) {
    super(props);
    this.deleteOneTodo = this.deleteOneTodo.bind(this);
  }

  componentWillMount() {
    this.context.getAllTodos();
  }

  deleteOneTodo(index) {
    StorageApi.deleteTodo(index);
    this.context.getAllTodos();
  }

  render() {
    return (
      <div className="todos">
        <Link to={`/todos/new`}>New todo</Link>
        {this.props.new}
        Todos
        {
          this.context.todos.map((t, index) => {
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

Todos.contextTypes = {
  getAllTodos: React.PropTypes.func,
  todos: React.PropTypes.array
};

export default Todos;
