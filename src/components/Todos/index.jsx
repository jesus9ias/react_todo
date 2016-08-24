import React from 'react';
import { setTodos, getTodos } from '../Utils/StorageApi';

class Todos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: []}
  }

  componentWillMount() {
    setTodos([{'num': 1}, {'num': 2}]);
    this.setState({todos: getTodos()});
  }

  render() {
    return (
      <div className="todos">
        {this.props.new}
        Todos
        {
          this.state.todos.map((t, index) => {
            return <p key={index}>{t.num}</p>
          })
        }
        {this.props.edit}
      </div>
    );
  }
}

export default Todos;
