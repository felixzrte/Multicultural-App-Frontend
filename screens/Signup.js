import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  CustomButton,
  CustomInput,
  CustomInputNoPadding,
  McText,
} from '../components';
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

const Signup = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [hidePassword, setHidePassword] = useState(true);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const {isLoading, register} = useContext(AuthContext);

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
          <McText h3>Create An Account</McText>
          <StyledFormArea>
            <CustomInput
              label="Full Name"
              icon="person"
              placeholder="Felix Zarate"
              placeholderTextColor={COLORS.gray}
              value={name}
              onChangeText={(text) => setName(text)}
            />
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
            <CustomInput
              label="Confirm Password"
              icon="key"
              placeholder="* * * * * * * * * *"
              placeholderTextColor={COLORS.gray}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <CustomButton
              text="REGISTER"
              onPress={() => {
                register(name, email, password, confirmPassword);
              }}
            />
            <Line />
            <ExtraView>
              <McText body3>Already Have An Account? </McText>
              <TextLink onPress={() => navigation.navigate('Signin')}>
                <McText body3 color={COLORS.blue}>
                  Login
                </McText>
              </TextLink>
            </ExtraView>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default Signup;
