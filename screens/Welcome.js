import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {
  SubTitle,
  StyledFormArea,
  ButtonText,
  StyledButton,
  Line,
  WelcomeContainer,
  InnerContainer,
  WelcomeImage,
  Avatar,
  PageTitle,
} from '../constants/styles';
import {StatusBar} from 'expo-status-bar';

const Welcome = ({navigation}) => {
  const {height} = useWindowDimensions();

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={images.beach} />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome!</PageTitle>
          <SubTitle welcome={true}>Felix Zarate</SubTitle>
          <SubTitle welcome={true}>felixzarte@gmail.com</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="contain" source={images.profile_pic} />
            <Line />
            <StyledButton
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
