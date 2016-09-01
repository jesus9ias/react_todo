import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
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
    const ELEMENT_CLASS = classnames(`section-element element-${this.props.todo.status}`);
    const PRIORITY_CLASS = classnames(`priority priority-${this.props.todo.status}`);
    const STATUS_CLASS = classnames(`status status-${this.props.todo.status}`);
    return (
      <div className={ELEMENT_CLASS}>
        <p className="section-element-title">{this.props.todo.name}</p>
        <p className="section-element-subtitle">{this.props.todo.description}</p>
        <p>{this.props.todo.date_created}</p>
        <p>{this.props.todo.date_expiration}</p>
        <p className={PRIORITY_CLASS}>{priorities[this.props.todo.priority]}</p>
        <p className={STATUS_CLASS}>{status[this.props.todo.status]}</p>
        <Link to={`/todos/${this.props.todo.id}`}></Link>
        <a onClick={this.deleteOneTodo} value="Delete"></a>
      </div>
    );
  }
}

export default OneTodo;
