import Request from '@myapp/interceptor/auth.interceptor';

const authService = (function () {
  function _login(email, password) {
    return Request.post('/api/login', {email: email, password: password});
  }

  function _logout() {
    return Request.get('/api/logout');
  }

  return {
    login: _login,
    logout: _logout,
  };
})();
export default authService;
