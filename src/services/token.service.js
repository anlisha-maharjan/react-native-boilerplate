import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenService = (function () {
  async function _setToken(token) {
    try {
      await AsyncStorage.setItem('token', JSON.stringify(token));
    } catch (e) {}
  }

  async function _getToken(token) {
    try {
      return await AsyncStorage.getItem('token');
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
