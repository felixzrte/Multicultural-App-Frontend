import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
} from '../constants/styles';
import {Octicons, Ionicons} from '@expo/vector-icons';

const CustomInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={COLORS.blue} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={COLORS.gray}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default CustomInput;
