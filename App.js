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
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import RootStack from './navigation/RootStack';

import {customFonts} from './constants';
import {COLORS} from './constants';

const Stack = createStackNavigator();

export default function App() {
  const [auth, setAuth] = useState(null);
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
      {auth ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small" />
  );
}
