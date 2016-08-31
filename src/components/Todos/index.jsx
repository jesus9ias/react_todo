import React from 'react';
import { Link } from 'react-router';
import StorageApi from '../Utils/StorageApi';
import OneTodo from './OneTodo';

class Todos extends React.Component {

  constructor(props) {
    super(props);
    this.deleteOneTodo = this.deleteOneTodo.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.getFilters = this.getFilters.bind(this);
  }

  componentWillMount() {
    this.getTodos();
  }

  deleteOneTodo(index) {
    StorageApi.deleteTodo(index);
    this.context.getAllTodos();
  }

  getTodos() {
    this.context.getAllTodos();
  }

  getFilters() {
    let status_filter = [];
    let priorities_filter = [];
    let {
      status_inactive,
      status_active,
      status_canceled,
      status_finished,
      priorities_low,
      priorities_medium,
      priorities_high,
      priorities_extreme
    } = this.refs;
    if (status_inactive.checked == true) {
      status_filter.push(1);
    }
    if (status_active.checked == true) {
      status_filter.push(2);
    }
    if (status_canceled.checked == true) {
      status_filter.push(3);
    }
    if (status_finished.checked == true) {
      status_filter.push(4);
    }

    if (priorities_low.checked == true) {
      priorities_filter.push(1);
    }
    if (priorities_medium.checked == true) {
      priorities_filter.push(2);
    }
    if (priorities_high.checked == true) {
      priorities_filter.push(3);
    }
    if (priorities_extreme.checked == true) {
      priorities_filter.push(4);
    }

    this.context.getAllTodos(status_filter, priorities_filter);
  }

  render() {
    return (
      <div className="todos">
        <Link to={`/todos/new`}>New todo</Link>
        <div className="filters">
          <p>Status Filters</p>
          <label>Inactive <input type="checkbox" ref="status_inactive" onClick={this.getFilters} /></label>
          <label>Active <input type="checkbox" ref="status_active" onClick={this.getFilters} /></label>
          <label>Canceled <input type="checkbox" ref="status_canceled" onClick={this.getFilters} /></label>
          <label>Finished <input type="checkbox" ref="status_finished" onClick={this.getFilters} /></label>
        </div>
        <div className="filters">
          <p>Priorities Filters</p>
          <label>Low <input type="checkbox" ref="priorities_low" onClick={this.getFilters} /></label>
          <label>Medium <input type="checkbox" ref="priorities_medium" onClick={this.getFilters} /></label>
          <label>High <input type="checkbox" ref="priorities_high" onClick={this.getFilters} /></label>
          <label>Extrem <input type="checkbox" ref="priorities_extreme" onClick={this.getFilters} /></label>
        </div>
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
