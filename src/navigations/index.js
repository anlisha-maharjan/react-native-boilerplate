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
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeBackgroundColor: '#F6F9FC',
        activeTintColor: '#1C3496',
        inactiveBackgroundColor: '#ffffff',
        inactiveTintColor: '#BCC5D3',
        showLabel: false,
        style: {
          maxHeight: '75px',
          height: '10%',
          paddingTop: '3%',
          paddingBottom: '3%',
          paddingLeft: '6%',
          paddingRight: '6%',
          borderTopWidth: '1px',
          borderTopColor: '#E2E8ED',
          shadowOpacity: '0',
          elevation: '0',
          backgroundColor: '#fff',
        },
        tabStyle: {
          marginLeft: '3.2%',
          marginRight: '3.2%',
          borderRadius: '5px',
        },
      }}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MeIcon name="home" color={color} size={22} />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MeIcon name="setting" color={color} size={22} />
          ),
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
