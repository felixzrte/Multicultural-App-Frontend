import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useContext, useState} from 'react';
import {CustomButton, CustomInput, McText} from '../components';
import KeyboardAvoidingWrapper from '../constants/KeyboardAvoidingWrapper';
import {
  InnerContainer,
  StyledContainer,
  Logo,
  SubTitle,
  StyledFormArea,
  StyledButton,
  Line,
  ExtraView,
  ButtonText,
  ExtraText,
  TextLink,
  TextLinkContent,
} from '../constants/styles';
import {StatusBar} from 'expo-status-bar';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {AuthContext} from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
const Signin = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);

  const {isLoading, login} = useContext(AuthContext);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <Spinner visible={isLoading} />
        <StatusBar style="dark" />
        <InnerContainer>
          <Logo
            style={{height: height * 0.35}}
            resizeMode="cover"
            source={images.mcc}
          />
          <SubTitle>Account Login</SubTitle>
          <StyledFormArea>
            <CustomInput
              label="Email Address"
              icon="mail"
              placeholder="example@gmail.com"
              placeholderTextColor={COLORS.gray}
              keyboardType="email-address"
              autoCapitalize={false}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <CustomInput
              label="Password"
              icon="key"
              placeholder="* * * * * * * * * *"
              placeholderTextColor={COLORS.gray}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <CustomButton text="LOGIN" onPress={() => login(email, password)} />
            <Line />
            <ExtraView>
              <ExtraText>Don't Have An Account? </ExtraText>
              <TextLink onPress={() => navigation.navigate('Signup')}>
                <TextLinkContent>Register</TextLinkContent>
              </TextLink>
            </ExtraView>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default Signin;
