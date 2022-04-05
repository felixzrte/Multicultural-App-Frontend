import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
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
  StyledTextInputNoPadding,
} from '../constants/styles';
import {StatusBar} from 'expo-status-bar';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';

const AddEvent = ({navigation}) => {
  const {height} = useWindowDimensions();
  return (
    <Container>
      <ScrollView>
        <HeaderSection>
          <McText h1>Events</McText>
          <View style={{flexDirection: 'row'}}>
            <McText
              style={{marginTop: 10, textAlign: 'left'}}
              body4
              color="gray">
              Add a new event!
            </McText>
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
                <StyledTextInputNoPadding placeholder="Enter Club Name" />
                <McText>Event Name</McText>
                <StyledTextInputNoPadding placeholder="Enter Event Name" />
                <McText>Date</McText>
                <StyledTextInputNoPadding placeholder="Enter Date" />
                <McText>Description</McText>
                <StyledTextInputNoPadding placeholder="Enter Description" />
                <McText>Location</McText>
                <StyledTextInputNoPadding placeholder="Enter Location" />
                <McText>Image</McText>
                <StyledTextInputNoPadding placeholder="Enter Image" />
                <McText>Extra Notes</McText>
                <StyledTextInputNoPadding placeholder="Enter Extra Notes" />

                <CustomButton text="Add New Event" />
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
