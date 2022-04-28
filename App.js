/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Bar from './src/components/status-bar';
import Navigation from './src/navigations';
import store from './src/reduxs/store';

const App = () => {
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
