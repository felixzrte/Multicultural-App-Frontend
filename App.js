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

import {customFonts} from './constants';
import {COLORS} from './constants';
import Navigation from './navigation/Navigation';
import {AuthProvider} from './context/AuthContext';

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
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  ) : (
    <ActivityIndicator size="small" />
  );
}
