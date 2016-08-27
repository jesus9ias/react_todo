import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav">
        Nav

        <Link to={`/`}>Home</Link>

        <button onClick={this.context.openSidenav}>Toggle</button>
      </div>
    );
  }
}

Nav.contextTypes = {
  openSidenav: React.PropTypes.func,
};

export default Nav;
