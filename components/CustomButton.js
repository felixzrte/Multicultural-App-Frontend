import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {McText} from './styled';
import {COLORS} from '../constants';

const CustomButton = ({text, onPress, isLoading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <McText body3 color="white">
          {text}
        </McText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    height: 48,
    borderRadius: 8,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;
