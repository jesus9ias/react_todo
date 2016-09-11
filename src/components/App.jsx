import React from 'react';
import Nav from './Nav';
import { SideNavContainer } from './SideNav';
import StorageApi from './Utils/StorageApi';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenSidenav: false
    };
    this.openSidenav = this.openSidenav.bind(this);
    this.closeSidenav = this.closeSidenav.bind(this);
  }

  getChildContext() {
    return {
      openSidenav: this.openSidenav,
      closeSidenav: this.closeSidenav
    };
  }

  openSidenav() {
    this.setState({isOpenSidenav: true});
  }

  closeSidenav() {
    this.setState({isOpenSidenav: false});
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <SideNavContainer isOpenSidenav={this.state.isOpenSidenav} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

App.childContextTypes = {
  openSidenav: React.PropTypes.func,
  closeSidenav: React.PropTypes.func,
};

export default App;
