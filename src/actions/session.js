import { saveSession, clearSession } from '../utils/session';

export const SESSION_SET_USERNAME = 'SESSION_SET_USERNAME';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const setUsername = username => {
  saveSession(username);
  return { type: SESSION_SET_USERNAME, username };
};

export const logout = () => {
  clearSession();
  return { type: SESSION_LOGOUT };
};
