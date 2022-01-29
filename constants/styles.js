import styled from 'styled-components';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 80%;
  max-width: 600px;
  max-height: 250px;
`;
export const SubTitle = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${COLORS.tertiary};
`;
export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${COLORS.secondary};
  width: 100%;
  border-color: #e8e8e8;
  border-width: 1px;
  border-radius: 10px;
  padding-vertical: 15px;
  padding-horizontal: 10px;
  padding-left: 50px;
  margin-vertical: 5px;
  height: 45px;
`;

export const StyledInputLabel = styled.Text`
  color: ${COLORS.tertiary};
  font-size: 13px;
  text-align: left;
  padding-left: 5px;
  margin-top: 10px;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 47%;
  position: absolute;
  z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 47%;
  position: absolute;
  z-index: 1;
`;
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${COLORS.blue};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;
export const ButtonText = styled.Text`
  color: ${COLORS.primary};
  font-size: 16px;
`;
export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;
export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${COLORS.gray};
  margin-vertical: 10px;
`;
export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${COLORS.tertiary};
  font-size: 15px;
`;
export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const TextLinkContent = styled.Text`
  color: ${COLORS.blue};
  font-size: 15px;
`;
