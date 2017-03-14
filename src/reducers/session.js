import { SESSION_SET_USERNAME, SESSION_LOGOUT } from '../actions/session';

const initialState = { username: '' };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SESSION_SET_USERNAME:
      return {
        username: action.username,
      };
    case SESSION_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
