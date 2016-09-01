import React from 'react';
import { Link } from 'react-router';
import {MegaSidenav, SidenavItem} from 'react-mega-sidenav';
import StorageApi from '../Utils/StorageApi';

class SideNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentWillReceiveProps() {
    this.setState({ todos: StorageApi.useFilters(this.props.todos, [2], [3,4]) });
  }

  render() {
    return (
      <MegaSidenav
        title="React TODO"
        items={[]}
        open={this.props.isOpenSidenav}
        close={this.context.closeSidenav}
        useClose={true}
        backdrop={true}
        orientation={'left'}
      >
      {
        this.state.todos.map((t, index) => {
          return (
            <div key={index} className="sidenav-link">
              <Link to={`/todos/${t.id}`}>{t.name}</Link>
            </div>
          );
        })
      }
      </MegaSidenav>
    );
  }
}

SideNav.propTypes = {
  isOpenSidenav: React.PropTypes.bool.isRequired
};

SideNav.contextTypes = {
  closeSidenav: React.PropTypes.func,
  getAllTodos: React.PropTypes.func,
  todos: React.PropTypes.array
};

export default SideNav;
