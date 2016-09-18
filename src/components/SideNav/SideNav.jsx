import React from 'react';
import { Link } from 'react-router';
import {MegaSidenav, SidenavItem} from 'react-mega-sidenav';
import FirebaseApi from '../Utils/FirebaseApi';

class SideNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentWillMount() {
    this.setState({ todos: FirebaseApi.useFilters(this.props.todos, [2], [3,4]) });
  }

  componentWillReceiveProps() {
    this.setState({ todos: FirebaseApi.useFilters(this.props.todos, [2], [3,4]) });
  }

  render() {
    return (
      <MegaSidenav
        title="React TODO"
        items={[]}
        open={this.props.isOpenSidenav}
        close={this.props.close_sidenav}
        useClose={true}
        backdrop={true}
        orientation={'left'}
      >
      {
        this.state.todos.map((t, index) => {
          return (
            <Link key={index} className="sidenav-link" to={`/todos/${t.id}`}>{t.name}</Link>
          );
        })
      }
      </MegaSidenav>
    );
  }
}

SideNav.propTypes = {
  isOpenSidenav: React.PropTypes.bool.isRequired,
  close_sidenav: React.PropTypes.func.isRequired,
  todos: React.PropTypes.array
};

export default SideNav;
