import React from 'react';
import StorageApi from '../Utils/StorageApi';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentWillMount() {
    this.setState({ todos: StorageApi.useFilters(this.context.todos, [2], []) });
  }

  render() {
    return (
      <section className="app">
        <h1 className="section-title">Home</h1>

        <div className="section-block">
          <Link className="section-element" to={`todos`}>
            <h2 className="section-element-title">View Todos</h2>
            <p className="section-element-subtitle">{this.state.todos.length} active TODOS</p>
          </Link>
          <Link className="section-element" to={`settings`}>
            <h2 className="section-element-title">View Settings</h2>
          </Link>
        </div>
      </section>
    );
  }
}

Home.contextTypes = {
  todos: React.PropTypes.array
};

export default Home;
