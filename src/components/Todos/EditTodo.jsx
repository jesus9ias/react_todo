import React from 'react';
import StorageApi from '../Utils/StorageApi';

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {todo: {}};
    this.SetForm = this.SetForm.bind(this);
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
    let todo = StorageApi.getTodo(id);
    //this.setState({todo: todo});
    this.refs.edit_name.value = todo.name;
    this.refs.edit_description.value = todo.description;
    this.refs.edit_date.value = todo.date;
    this.refs.edit_priority.value = todo.priority;
  }

  render() {
    return (
      <div className="todo-edit">
        Edit Todo

        <form>
          <label>ID</label>
          <p>{this.props.params.id}</p>

          <label>Name</label>
          <input type="input" ref="edit_name" />

          <label>Description</label>
          <input type="input" ref="edit_description" />

          <label>Date</label>
          <input type="input" ref="edit_date" />

          <label>Priority</label>
          <input type="input" ref="edit_priority" />

          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default EditTodo;
