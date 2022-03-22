import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import RootStack from './RootStack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export default function Route() {
  const userData = useSelector((state) => state.auth.userData);
  console.log('user data', userData);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {true ? AuthStack(Stack) : RootStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
