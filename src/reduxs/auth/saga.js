import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import AuthService from '@myapp/services/auth.service';
import TokenService from '@myapp/services/token.service';
import {LOGIN, LOGOUT} from '@myapp/reduxs/actions';
import {
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
} from '@myapp/reduxs/auth/action';

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}

const loginAsync = async (email, password) => {
  return AuthService.login(email, password);
};

function* login({payload}) {
  try {
    const response = yield call(loginAsync, payload.email, payload.password);
    if (response.data.success) {
      TokenService.setToken(response.data.data.token);
      payload.history.navigate('Dashboard');
      yield put(loginSuccess(response.data.success, response.data.message));
    } else {
      yield put(loginError(response.data.message));
    }
  } catch (error) {
    yield put(loginError(error.response.data.message));
  }
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}

const logoutAsync = async () => {
  return AuthService.logout();
};

function* logout({payload}) {
  try {
    const response = yield call(logoutAsync);
    if (response.data.success) {
      TokenService.clearToken();
      payload.history.navigate('Login');
      yield put(logoutSuccess(response.data.success, response.data.message));
    } else {
      yield put(logoutError(response.data.message));
    }
  } catch (error) {
    yield put(logoutError(error.response.data.message));
  }
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
