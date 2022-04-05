/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Button,
  Platform,
  Icon,
  ExtraView,
  TextLink,
  TextLinkContent,
  useWindowDimensions,
  StyledButton,
  ButtonText,
  StyledFormArea,
  Avatar,
  Line,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {CustomButton, McText} from '../components';
import {InnerContainer, StyledContainer} from '../constants/styles';
import {AuthContext} from '../context/AuthContext';

const Profile = ({navigation}) => {
  const {height} = useWindowDimensions();
  const {userInfo, logout, isLoading} = useContext(AuthContext);
  return (
    <StyledContainer>
      <InnerContainer>
        <McText h1>Profile</McText>
        <McText b3>Welcome {userInfo.user.name}</McText>
        <CustomButton text="LOGOUT" onPress={logout} />
      </InnerContainer>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
