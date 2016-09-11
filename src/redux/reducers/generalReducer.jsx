import * as actions from '../allTypes';
import { baseUrl, cdnUrl } from '../../CONFIG';

const initialState = {
  client_data: {
    baseUrl,
    cdnUrl
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_CLIENT_DATA:
      return {
        client_data: action.data
      };
    default:
      return state;
  }
};
