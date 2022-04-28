import React from 'react';
import {View, ScrollView, Text} from 'react-native';

const Dashboard = props => {
  return (
    <View
      width="100%"
      flexView="1"
      flexDirection="column"
      justifyContent="flex-start"
      paddingInset="0"
      background="#ffffff">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{width: '100%'}}>
        <View
          width="100%"
          flexView="0 0 auto"
          background="#1C3496"
          paddingInset="30"
          justifyContent="space-between"
          alignItems="flex-end">
          <Text size={36} color="#ffffff">
            Hi, {'\n'}
            Anlisha
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
