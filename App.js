/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Bar from './src/components/status-bar';
import Navigation from './src/navigations';
import store from './src/reduxs/store';

const App = () => {
  useEffect = () => {
    SplashScreen.hide();
  };
  return (
    <Provider store={store}>
      <Bar />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
