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
          onClick={this.props.open_sidenav}>
        </button>
        <Link to={`/`} className="nav-title">React TODOS</Link>
      </nav>
    );
  }
}

export default Nav;
