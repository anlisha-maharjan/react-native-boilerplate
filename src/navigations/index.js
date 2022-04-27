import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import Dashboard from '../pages/dashboard';
import Setting from '../pages/setting';
import Login from '../pages/login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: '#123F68',
        inactiveBackgroundColor: '#123F68',
        tabStyle: {paddingBottom: 5, paddingTop: 5},
        style: {backgroundColor: '#123F68'},
        labelStyle: {
          color: '#fff',
          fontFamily: 'SourceSansPro-Regular',
          fontSize: 12,
        },
      }}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => null,
        }}
        name="Home"
        component={Dashboard}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: () => null,
        }}
        name="Setting"
        component={Setting}
      />
    </Tab.Navigator>
  );
}
const Navigation = props => {
  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {props.token == null ? (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen name="Root" component={Root} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({auth}) => {
  const {token} = auth;
  return {token};
};
export default connect(mapStateToProps, {})(Navigation);
