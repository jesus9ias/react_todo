import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Nav />
        <SideNav />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
