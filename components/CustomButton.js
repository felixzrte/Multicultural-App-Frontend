import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const CustomButton = ({onPress, text, type = 'Primary'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container${type}`]]}>
      <Text style={[styles.text, styles[`text${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  containerPrimary: {
    backgroundColor: COLORS.blue,
  },
  containerTeriary: {},
  text: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
  textTertiary: {
    color: COLORS.gray1,
  },
});

export default CustomButton;
