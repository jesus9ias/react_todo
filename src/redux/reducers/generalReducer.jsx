import { Map, fromJS } from 'immutable';
import * as actions from '../allTypes';
import { baseUrl, cdnUrl } from '../../CONFIG';

const initialState = Map({
  client_data: {
    baseUrl,
    cdnUrl
  },
  isOpenSidenav: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_CLIENT_DATA:
      return state.update('client_data', value => action.data);
    case actions.OPEN_SIDENAV:
      return state.update('isOpenSidenav', value => action.data);
    case actions.CLOSE_SIDENAV:
      return state.update('isOpenSidenav', value => action.data);
    default:
      return state;
  }
};
