/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import * as Font from 'expo-font';
import {EventDetails, Home, Place, Login} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './navigation/Tabs';
import {customFonts} from './constants';

const Stack = createStackNavigator();

export default function App() {
  const [assetsLoaded, setAssetLoaded] = useState(false);

  /* Loading custom fonts in async */
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetLoaded(true);
  };

  useEffect(() => {
    _loadAssetsAsync();
  });
  return assetsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Home" component={Tabs} />

        <Stack.Screen name="Bookmark" component={Tabs} />

        <Stack.Screen name="Maps" component={Tabs} />

        <Stack.Screen name="EventDetails" component={EventDetails} />

        <Stack.Screen name="Profile" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small" />
  );
}
