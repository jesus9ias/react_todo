import Nav from './Nav';
import { connect } from 'react-redux';
import { generalActions } from '../../redux/actions';

const allActions = Object.assign({}, generalActions);

function mapStateToProps(state) {
  return {
    isOpenSidenav: state.general.isOpenSidenav
  };
}

export const NavContainer = connect(mapStateToProps, allActions)(Nav);
