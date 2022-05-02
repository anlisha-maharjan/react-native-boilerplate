import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

const Dashboard = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={require('../../assets/images/1.jpg')}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#1C3496', fontSize: 36}}>Welcome Anlisha!</Text>
      </ImageBackground>
    </View>
  );
};

export default Dashboard;
