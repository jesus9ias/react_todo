import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

  render() {
    return (
      <div className="app">
        Home

        <Link to={`todos`}>View Todos</Link>
        <Link to={`settings`}>View Settings</Link>
      </div>
    );
  }
}

export default Home;
