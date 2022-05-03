import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  RESET_AUTH,
} from '@myapp/reduxs/actions';
import TokenService from '@myapp/services/token.service';

const INIT_STATE = {
  email: null,
  password: null,
  history: null,
  token: TokenService.getToken(),
  success: false,
  message: null,
  loading: false,
  error: null,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, loading: true, error: null};
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload.error,
      };
    case LOGOUT:
      return {
        ...state,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case RESET_AUTH:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: null,
      };
    default:
      return {...state};
  }
};
export default authReducer;
