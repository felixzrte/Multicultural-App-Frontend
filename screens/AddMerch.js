import {View, Text, ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, CustomInput, McIcon, McText} from '../components';
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
  HeaderSection,
  Container,
  StyledTextInputNoPadding
} from '../constants/styles';
import {StatusBar} from 'expo-status-bar';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';


const AddMerch = ({navigation}) => {
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
    <Container>
      <ScrollView>
        <HeaderSection>
          <McText h1>Merch</McText>
            <View style={{flexDirection:'row'}}>
              <McText style={{marginTop: 10, textAlign:'left'}} body4 color="gray">Add a new article of club merchandise!</McText>
            </View>
            <Line />
          </HeaderSection>

    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <SubTitle>Create An Account</SubTitle>
          <StyledFormArea>
            <McText>Item Name</McText>
            <StyledTextInputNoPadding placeholder="Enter Item Name Here"></StyledTextInputNoPadding>
            <CustomInput
              label="Item Name"
              
              placeholderTextColor={COLORS.gray}
              autoCapitalize={false}
            />
            
            <CustomInput
              label="Email Address"
              placeholder="example@gmail.com"
              placeholderTextColor={COLORS.gray}
              autoCapitalize={false}
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
    </ScrollView>
    </Container>
  );
};

export default AddMerch;