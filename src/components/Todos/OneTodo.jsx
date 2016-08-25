import React from 'react';
import { Link } from 'react-router';
import StorageApi from '../Utils/StorageApi';

class OneTodo extends React.Component {

  constructor(props) {
    super(props);
    this.deleteOneTodo = this.deleteOneTodo.bind(this);
  }

  deleteOneTodo() {
    this.props.deleteOneTodo(this.props.index);
  }

  render() {
    return (
      <div>
        <p>{this.props.todo.id}</p>
        <p>{this.props.todo.name}</p>
        <p>{this.props.todo.description}</p>
        <p>{this.props.todo.date}</p>
        <p>{this.props.todo.priority}</p>
        <Link to={`/todos/${this.props.todo.id}`}>Edit</Link>
        <input type="button" onClick={this.deleteOneTodo} value="Delete" />
      </div>
    );
  }
}

export default OneTodo;
