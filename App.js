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
import Route from './navigation/Route';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';

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
    <Provider store={store}>
      <Route />
      <FlashMessage position="top" />
    </Provider>
  ) : (
    <ActivityIndicator size="small" />
  );
}
