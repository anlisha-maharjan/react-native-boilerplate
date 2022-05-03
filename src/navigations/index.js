import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import Dashboard from '@myapp/pages/dashboard';
import Setting from '@myapp/pages/setting';
import Login from '@myapp/pages/login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveBackgroundColor: '#F6F9FC',
        tabBarActiveTintColor: '#1C3496',
        tabBarInactiveBackgroundColor: '#ffffff',
        tabBarInactiveTintColor: '#BCC5D3',
        tabBarShowLabel: false,
        tabBarStyle: {
          maxHeight: 75,
          height: '10%',
          paddingTop: '3%',
          paddingBottom: '3%',
          paddingLeft: '6%',
          paddingRight: '6%',
          borderTopWidth: 1,
          borderTopColor: '#E2E8ED',
          shadowOpacity: 0,
          elevation: 0,
          backgroundColor: '#fff',
        },
        tabBarItemStyle: {
          marginLeft: '3.2%',
          marginRight: '3.2%',
          borderRadius: 5,
        },
      }}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        options={{
          title: '',
          headerStyle: {height: 0},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />

      <Tab.Screen
        options={{
          title: '',
          headerStyle: {height: 0},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {props.token === null || props.token?._W === null ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Root" component={Root} />
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
