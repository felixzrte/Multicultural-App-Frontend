import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const LaL = () => {

  return (
    <SafeAreaView>
    <ScrollView>
    <Text>
        Club: LAL
    </Text>
    </ScrollView>
    </SafeAreaView>
  );
};

export default LaL;