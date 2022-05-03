import Request from '@myapp/interceptor/auth.interceptor';

const authService = (function () {
  function _login(username, password) {
    return Request.post(
      '/token',
      JSON.stringify({username: username, password: password}),
    );
  }

  function _logout() {
    return Request.get('/logout');
  }

  return {
    login: _login,
    logout: _logout,
  };
})();
export default authService;
