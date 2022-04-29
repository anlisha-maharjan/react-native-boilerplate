import React from 'react';
import {View, Text} from 'react-native';

const Dashboard = props => {
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <Text style={{color: '#1C3496', fontSize: 36}}>Welcome Anlisha!</Text>
    </View>
  );
};

export default Dashboard;
