import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, CustomInput, CustomInputNoPadding} from '../components';
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
import {showMessage} from 'react-native-flash-message';

const Signup = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [hidePassword, setHidePassword] = useState(true);
  const [state, setState] = useState({
    isLoading: false,
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {isLoading, email, password, fullName, confirmPassword} = state;
  const updateState = (data) => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      fullName,
      email,
      password,
      confirmPassword,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onSignup = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({isLoading: true});
      try {
        const res = await actions.signup({
          name: fullName,
          email,
          password,
          confirmPassword,
        });
        console.log('res for signup====>', res);
        showMessage('Registered Successfully');
        updateState({isLoading: false});
        navigation.goBack();
      } catch (error) {
        console.log('error raised');
        showError(error.message);
        updateState({isLoading: false});
      }
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
          <SubTitle>Create An Account</SubTitle>
          <StyledFormArea>
            <CustomInput
              label="Full Name"
              icon="person"
              placeholder="Felix Zarate"
              placeholderTextColor={COLORS.gray}
              onChangeText={(fullName) => updateState({fullName})}
            />
            <CustomInput
              label="Email Address"
              icon="mail"
              placeholder="example@gmail.com"
              placeholderTextColor={COLORS.gray}
              keyboardType="email-address"
              onChangeText={(email) => updateState({email})}
              autoCapitalize={false}
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
            <CustomInput
              label="Confirm Password"
              icon="key"
              placeholder="* * * * * * * * * *"
              placeholderTextColor={COLORS.gray}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              onChangeText={(confirmPassword) => updateState({confirmPassword})}
            />
            <CustomButton
              onPress={onSignup}
              isLoading={isLoading}
              text="REGISTER"
            />
            <Line />
            <ExtraView>
              <ExtraText>Already Have An Account? </ExtraText>
              <TextLink onPress={() => navigation.navigate('Signin')}>
                <TextLinkContent>Login</TextLinkContent>
              </TextLink>
            </ExtraView>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default Signup;
