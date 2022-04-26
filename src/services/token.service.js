import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenService = (function () {
  function _setToken(token) {
    AsyncStorage.setItem('token', JSON.stringify(token));
  }

  async function _getToken() {
    try {
      let token = await AsyncStorage.getItem('token');
      return JSON.parse(token);
    } catch (error) {}
  }

  async function _clearToken() {
    await AsyncStorage.removeItem('token');
  }

  return {
    setToken: _setToken,
    getToken: _getToken,
    clearToken: _clearToken,
  };
})();
export default tokenService;
