import React from 'react';
import StorageApi from '../Utils/StorageApi';

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todo: {}};
  }

  componentWillMount() {
    this.setState({todo: StorageApi.getTodo(this.props.params.id)});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id != this.props.params.id)
    this.setState({todo: StorageApi.getTodo(nextProps.params.id)});
  }

  render() {
    return (
      <div className="todo-edit">
        Edit Todo
        <p>{this.state.todo.id}</p>
        <p>{this.state.todo.name}</p>
        <p>{this.state.todo.description}</p>
        <p>{this.state.todo.date}</p>
        <p>{this.state.todo.priority}</p>
      </div>
    );
  }
}

export default EditTodo;
