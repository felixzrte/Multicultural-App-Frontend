import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, CustomInput} from '../components';
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
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';

const Signin = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [hidePassword, setHidePassword] = useState(true);
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
  });

  const {isLoading, email, password} = state;
  const updateState = (data) => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      email,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onLogin = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({isLoading: true});
      try {
        const res = await actions.login({
          email,
          password,
        });
        console.log('res====>', res);
        updateState({isLoading: false});
      } catch (error) {
        console.log('error raised');
        showError(error.message);
        updateState({isLoading: false});
      }
      // navigation.navigate('Signup');
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
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
              onChangeText={(email) => updateState({email})}
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
              onChangeText={(password) => updateState({password})}
            />
            <CustomButton
              onPress={onLogin}
              isLoading={isLoading}
              text="LOGIN"
            />
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
