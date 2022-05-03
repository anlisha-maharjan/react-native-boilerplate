export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const RESET_AUTH = 'RESET_AUTH';

export const login = (email, password, history) => ({
  type: LOGIN,
  payload: {email, password, history},
});

export const loginSuccess = (success, message) => ({
  type: LOGIN_SUCCESS,
  payload: {success, message},
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: {error},
});

export const logout = history => ({
  type: LOGOUT,
  payload: {history},
});

export const logoutSuccess = (success, message) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {success, message},
  };
};

export const logoutError = error => {
  return {
    type: LOGOUT_ERROR,
    payload: {error},
  };
};

export const resetAuth = () => ({
  type: RESET_AUTH,
  payload: {},
});
