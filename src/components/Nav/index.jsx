import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav">
        <button
          className="btn btn-icon btn-menu"
          onClick={this.context.openSidenav}>
        </button>
        <Link to={`/`} className="nav-title">React TODOS</Link>
      </nav>
    );
  }
}

Nav.contextTypes = {
  openSidenav: React.PropTypes.func,
};

export default Nav;
