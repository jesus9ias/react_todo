import * as actions from '../allTypes';
import { baseUrl, cdnUrl } from '../../CONFIG';

const initialState = {
  client_data: {
    baseUrl,
    cdnUrl
  },
  isOpenSidenav: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_CLIENT_DATA:
      return {
        isOpenSidenav: state.isOpenSidenav,
        client_data: action.data
      };
    case actions.OPEN_SIDENAV:
      return {
        isOpenSidenav: action.data,
        client_data: state.client_data
      };
    case actions.CLOSE_SIDENAV:
      return {
        isOpenSidenav: action.data,
        client_data: state.client_data
      };
    default:
      return state;
  }
};
