import React from 'react';
import StorageApi from '../Utils/StorageApi';

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.saveTodo = this.saveTodo.bind(this);
  }

  saveTodo(e) {
    e.preventDefault();
    const name = this.refs.new_name.value;
    const description = this.refs.new_description.value;
    const date = this.refs.new_date.value;
    const priority = this.refs.new_priority.value;
    StorageApi.createTodo({
      name,
      description,
      date,
      priority
    });
    this.refs.new_name.value = '';
    this.refs.new_description.value = '';
    this.refs.new_date.value = '';
    this.refs.new_priority.value = '';
    this.context.getAllTodos();
  }

  render() {
    return (
      <div className="todo-new">
        New Todo

        <form onSubmit={this.saveTodo}>
          <label>Name</label>
          <input ref="new_name" />

          <label>Description</label>
          <input ref="new_description" />

          <label>Date</label>
          <input ref="new_date" />

          <label>Priority</label>
          <input ref="new_priority" />

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

NewTodo.contextTypes = {
  getAllTodos: React.PropTypes.func
};

export default NewTodo;
