import React from 'react';
import {MegaSidenav, SidenavItem} from 'react-mega-sidenav';

class SideNav extends React.Component {

  render() {
    return (
      <div className="sideNav">
        SideNav

        <MegaSidenav
          title="React TODO"
          items={[]}
          open={this.props.isOpenSidenav}
          close={this.context.closeSidenav}
          useClose={true}
          backdrop={true}
          orientation={'left'}
        >
        </MegaSidenav>
      </div>
    );
  }
}

SideNav.propTypes = {
  isOpenSidenav: React.PropTypes.bool.isRequired
};

SideNav.contextTypes = {
  closeSidenav: React.PropTypes.func,
};

export default SideNav;
