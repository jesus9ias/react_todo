import React from 'react';
import StorageApi from '../Utils/StorageApi';

class Todos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: []}
    this.getAllTodos = this.getAllTodos.bind(this);
  }

  getChildContext() {
    return {getAllTodos: this.getAllTodos};
  }

  componentWillMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    this.setState({todos: StorageApi.getTodos()});
  }

  render() {
    return (
      <div className="todos">
        {this.props.new}
        Todos
        {
          this.state.todos.map((t, index) => {
            return (
              <div key={index}>
                <p>{t.id}</p>
                <p>{t.name}</p>
                <p>{t.description}</p>
                <p>{t.date}</p>
                <p>{t.priority}</p>
              </div>
            )
          })
        }
        {this.props.edit}
      </div>
    );
  }
}

Todos.childContextTypes = {
  getAllTodos: React.PropTypes.func
};

export default Todos;
