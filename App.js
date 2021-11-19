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
import {Home, Place} from './screens';
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
        initialRouteName={'Dashboard'}>
        <Stack.Screen name="Dashboard" component={Tabs} />

        <Stack.Screen name="Place" component={Place} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small" />
  );
}
