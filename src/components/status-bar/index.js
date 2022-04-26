import React from 'react';
import {View, StatusBar} from 'react-native';

const Bar = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(18, 63, 104, 1)',
        height: 0,
      }}>
      <StatusBar
        barStyle="default"
        backgroundColor="rgba(18, 63, 104, 1)"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
    </View>
  );
};

export default Bar;
