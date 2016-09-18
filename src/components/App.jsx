import React from 'react';
import { NavContainer } from './Nav';
import { SideNavContainer } from './SideNav';

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
