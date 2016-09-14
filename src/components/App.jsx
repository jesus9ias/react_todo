import React from 'react';
import { NavContainer } from './Nav';
import { SideNavContainer } from './SideNav';
import StorageApi from './Utils/StorageApi';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <NavContainer />
        <SideNavContainer />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
