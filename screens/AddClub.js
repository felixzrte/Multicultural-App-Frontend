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

const AddClub = ({navigation}) => {
  const {height} = useWindowDimensions();
  return (
    <Container>
      <ScrollView>
        <HeaderSection>
          <McText h1>Clubs</McText>
          <View style={{flexDirection: 'row'}}>
            <McText
              style={{marginTop: 10, textAlign: 'left'}}
              body4
              color="gray">
              Add a new club!
            </McText>
          </View>
          <Line />
        </HeaderSection>

        <KeyboardAvoidingWrapper>
          <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
              <SubTitle>Add a New Club</SubTitle>
              <StyledFormArea>
                <McText>Club Name</McText>
                <StyledTextInputNoPadding placeholder="Enter Club Name" />
                <McText>Club Acronym</McText>
                <StyledTextInputNoPadding placeholder="Enter Club Acronym" />
                <McText>Mission Statement</McText>
                <StyledTextInputNoPadding placeholder="Enter Mission Statment" />
                <McText>Club Header</McText>
                <StyledTextInputNoPadding placeholder="Enter Club Header" />
                <McText>Club Bio</McText>
                <StyledTextInputNoPadding placeholder="Enter Club Bio" />
                <McText>Logo Image</McText>
                <StyledTextInputNoPadding placeholder="Enter Logo Image" />
                <McText>Banner Image</McText>
                <StyledTextInputNoPadding placeholder="Enter Banner Image" />
                <McText>Club Email</McText>
                <StyledTextInputNoPadding placeholder="Enter Club Email" />
                <McText>Club Instagram</McText>
                <StyledTextInputNoPadding placeholder="Enter Club Instagram" />
                <McText>Club Facebook</McText>
                <StyledTextInputNoPadding placeholder="Enter Club Facebook" />
                <McText>Primary Color</McText>
                <StyledTextInputNoPadding placeholder="Enter Primary Club Color" />
                <McText>Seccondary Color</McText>
                <StyledTextInputNoPadding placeholder="Enter Seccondary Club Color" />

                <CustomButton text="Add New Club" />
                <Line />
              </StyledFormArea>
            </InnerContainer>
          </StyledContainer>
        </KeyboardAvoidingWrapper>
      </ScrollView>
    </Container>
  );
};

export default AddClub;
