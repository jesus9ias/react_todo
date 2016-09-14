import * as actions from '../allTypes';
import { baseUrl, cdnUrl } from '../../CONFIG';

export default {
  load_client_data: () => (dispatch) => {
    if (window.__CLIENT_DATA__) {
      var client_data = window.__CLIENT_DATA__;
    } else {
      var client_data = {
        baseUrl,
        cdnUrl
      };
    }
    dispatch({ type: actions.LOAD_CLIENT_DATA, data: client_data });
  },
  open_sidenav: () => (dispatch) => {
    dispatch({ type: actions.OPEN_SIDENAV, data: true });
  },
  close_sidenav: () => (dispatch) => {
    dispatch({ type: actions.CLOSE_SIDENAV, data: false });
  }
};
