import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllTodos([2], []);
  }


  render() {
    return (
      <section className="app">
        <h1 className="section-title">Home</h1>

        <div className="section-block home">
          <Link className="section-element home-element" to={`todos`}>
            <h2 className="section-element-title">View Todos</h2>
            <p className="section-element-subtitle">{this.props.todos.length} active TODOS</p>
          </Link>
          <Link className="section-element home-element" to={`settings`}>
            <h2 className="section-element-title">View Settings</h2>
          </Link>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  todos: React.PropTypes.array
};

export default Home;
