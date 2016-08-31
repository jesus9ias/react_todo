import React from 'react';
import {MegaSidenav, SidenavItem} from 'react-mega-sidenav';
import StorageApi from '../Utils/StorageApi';

class SideNav extends React.Component {

  constructor(props) {
    super(props);
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: []
    };
  }

  componentWillMount() {
    this.getTodos();
  }

  getTodos() {
    this.setState({ todos: StorageApi.getTodos([2], [3,4]) });
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
            <div key={index}>
              <p>{t.name}</p>
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
