import React from 'react';

class Todos extends React.Component {

  render() {
    return (
      <div className="todos">
        {this.props.new}
        Todos
        {this.props.edit}
      </div>
    );
  }
}

export default Todos;
