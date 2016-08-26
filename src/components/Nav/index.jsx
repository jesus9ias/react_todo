import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {

  render() {
    return (
      <div className="nav">
        Nav

        <Link to={`/`}>Home</Link>
      </div>
    );
  }
}

export default Nav;
