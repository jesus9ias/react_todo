import React from 'react';
import StorageApi from '../Utils/StorageApi';

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.SetForm = this.SetForm.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    this.SetForm(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id != this.props.params.id) {
      this.SetForm(nextProps.params.id);
    }
  }

  SetForm(id) {
    const todo = StorageApi.getTodo(id);
    this.refs.edit_name.value = todo.name;
    this.refs.edit_description.value = todo.description;
    this.refs.edit_date_created.value = todo.date_created;
    this.refs.edit_date_expiration.value = todo.date_expiration;
    this.refs.edit_priority.value = todo.priority;
    this.refs.edit_status.value = todo.status;
  }

  updateTodo(e) {
    e.preventDefault();
    const {
      edit_name,
      edit_description,
      edit_date_created,
      edit_date_expiration,
      edit_priority,
      edit_status
    } = this.refs;
    StorageApi.updateTodo({
      id: this.props.params.id,
      name: edit_name.value,
      description: edit_description.value,
      date_created: edit_date_created.value,
      date_expiration: edit_date_expiration.value,
      priority: edit_priority.value,
      status: edit_status.value,
    });
    this.props.getAllTodos();
  }

  render() {
    return (
      <div className="todo-edit">
        <form className="form" onSubmit={this.updateTodo}>
          <label className="form-label">ID</label>
          <p className="form-text">{this.props.params.id}</p>

          <label className="form-label" htmlFor="edit_name">Name</label>
          <input className="form-input" type="input" id="edit_name" ref="edit_name" />

          <label className="form-label" htmlFor="edit_description">Description</label>
          <input className="form-input" type="input" id="edit_description" ref="edit_description" />

          <label className="form-label" htmlFor="edit_date_created">Date created</label>
          <input className="form-input" type="date" id="edit_date_created" ref="edit_date_created" />

          <label className="form-label" htmlFor="edit_date_expiration">Date expiration</label>
          <input className="form-input" type="date" id="edit_date_expiration" ref="edit_date_expiration" />

          <label className="form-label" htmlFor="edit_priority">Priority</label>
          <select id="edit_priority" className="form-select" ref="edit_priority">
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            <option value="4">Extreme</option>
          </select>

          <label className="form-label" htmlFor="edit_status">Status</label>
          <select id="edit_status" className="form-select" ref="edit_status">
            <option value="1">Inactive</option>
            <option value="2">Active</option>
            <option value="3">Canceled</option>
            <option value="4">Finished</option>
          </select>

          <input className="btn btn-ok" type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

EditTodo.propTypes = {
  getAllTodos: React.PropTypes.func
};

export default EditTodo;
