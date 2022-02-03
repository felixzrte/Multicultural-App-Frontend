import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {EventDetails, Home, Place} from '../screens';
import {COLORS} from '../constants';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Bookmark" component={Tabs} />
      <Stack.Screen name="Maps" component={Tabs} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="Profile" component={Tabs} />
    </Stack.Navigator>
  );
};

export default AuthStack;
