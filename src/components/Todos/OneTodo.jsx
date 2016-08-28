import React from 'react';
import { Link } from 'react-router';
import StorageApi from '../Utils/StorageApi';
import { priorities, status } from '../../CONFIG';

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
        <p>{this.props.todo.date_created}</p>
        <p>{this.props.todo.date_expiration}</p>
        <p>{priorities[this.props.todo.priority]}</p>
        <p>{status[this.props.todo.status]}</p>
        <Link to={`/todos/${this.props.todo.id}`}>Edit</Link>
        <input type="button" onClick={this.deleteOneTodo} value="Delete" />
      </div>
    );
  }
}

export default OneTodo;
