import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {EventDetails, Home, Merch, Product, Suggestion, 
Asa, Asu, Bsu, Csa, Isa, Lal, Mcc,Profile,UpdateProfile, ClubsPage} from '../screens';
import {COLORS} from '../constants';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ClubsPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: COLORS.tertiary,
        headerTransparent: true,
        headerTitle: '',
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Bookmark" component={Tabs} />
      <Stack.Screen name="Maps" component={Tabs} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="ClubsPage" component={ClubsPage} />
      <Stack.Screen name="Profile" component={Tabs} />
      <Stack.Screen name="Merch" component={Merch} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="Asu" component={Suggestion} />
    </Stack.Navigator>
  );
};

export default RootStack;
