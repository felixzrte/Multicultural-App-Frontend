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


const AddEvent = ({navigation}) => {
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
          <McText h1>Events</McText>
            <View style={{flexDirection:'row'}}>
              <McText style={{marginTop: 10, textAlign:'left'}} body4 color="gray">Add a new event!</McText>
            </View>
            <Line />
          </HeaderSection>

    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <SubTitle>Add a New Event</SubTitle>
          <StyledFormArea>
            <McText>Club Name</McText>
            <StyledTextInputNoPadding placeholder="Enter Club Name"></StyledTextInputNoPadding>
            <McText>Event Name</McText>
            <StyledTextInputNoPadding placeholder="Enter Event Name"></StyledTextInputNoPadding>
            <McText>Date</McText>
            <StyledTextInputNoPadding placeholder="Enter Date"></StyledTextInputNoPadding>
            <McText>Description</McText>
            <StyledTextInputNoPadding placeholder="Enter Description"></StyledTextInputNoPadding>
            <McText>Location</McText>
            <StyledTextInputNoPadding placeholder="Enter Location"></StyledTextInputNoPadding>
            <McText>Image</McText>
            <StyledTextInputNoPadding placeholder="Enter Image"></StyledTextInputNoPadding>
            <McText>Extra Notes</McText>
            <StyledTextInputNoPadding placeholder="Enter Extra Notes"></StyledTextInputNoPadding>
 
            <CustomButton
              onPress={onSignup}
              isLoading={isLoading}
              text="Add New Event"
            />
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
    </ScrollView>
    </Container>
  );
};

export default AddEvent;