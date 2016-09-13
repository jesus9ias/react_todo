import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import { priorities, status } from '../../CONFIG';
import moment from 'moment';

class OneTodo extends React.Component {

  constructor(props) {
    super(props);
    this.deleteOneTodo = this.deleteOneTodo.bind(this);
  }

  deleteOneTodo() {
    this.props.deleteOneTodo(this.props.todo.id);
  }

  render() {
    const ELEMENT_CLASS = classnames(`section-element todo element-${this.props.todo.status}`, {
      'todo-late': moment(this.props.todo.date_expiration) < moment() && this.props.todo.status == 2
    });
    const PRIORITY_CLASS = classnames(`priority priority-${this.props.todo.priority}`);
    const STATUS_CLASS = classnames(`status status-${this.props.todo.status}`);
    let dateCreated = moment(this.props.todo.date_created).fromNow();
    let dateExpiration = moment(this.props.todo.date_expiration).fromNow();
    return (
      <div className={ELEMENT_CLASS}>
        <p className="section-element-title">{this.props.todo.name}</p>
        <p className="section-element-subtitle">{this.props.todo.description}</p>
        <p>Created {dateCreated} and expires {dateExpiration}</p>
        <p className={PRIORITY_CLASS}>{priorities[this.props.todo.priority]}</p>
        <p className={STATUS_CLASS}>{status[this.props.todo.status]}</p>
        <div>
          <Link className="section-element-button" to={`/todos/${this.props.todo.id}`}>
            <img src={`${this.props.client_data.cdnUrl}/img/right-arrow.png`} />
          </Link>
          <a className="section-element-button" onClick={this.deleteOneTodo}>
            <img src={`${this.props.client_data.cdnUrl}/img/cancel_black.png`} />
          </a>
        </div>
      </div>
    );
  }
}

export default OneTodo;
