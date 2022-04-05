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

const AddAnnouncement = ({navigation}) => {
  const {height} = useWindowDimensions();
  return (
    <Container>
      <ScrollView>
        <HeaderSection>
          <McText h1>Announcements</McText>
          <View style={{flexDirection: 'row'}}>
            <McText
              style={{marginTop: 10, textAlign: 'left'}}
              body4
              color="gray">
              Add a new announcement!
            </McText>
          </View>
          <Line />
        </HeaderSection>

        <KeyboardAvoidingWrapper>
          <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
              <SubTitle>Add a New Announcement</SubTitle>
              <StyledFormArea>
                <McText>Announcement Title</McText>
                <StyledTextInputNoPadding placeholder="Enter Announcement Title" />
                <McText>Announcement Contents</McText>
                <StyledTextInputNoPadding placeholder="Enter Announcement Contents" />
                <McText>Start Date</McText>
                <StyledTextInputNoPadding placeholder="Enter Start Date" />
                <McText>End Date</McText>
                <StyledTextInputNoPadding placeholder="Enter End Date" />

                <CustomButton text="Add New Announcement" />
                <Line />
              </StyledFormArea>
            </InnerContainer>
          </StyledContainer>
        </KeyboardAvoidingWrapper>
      </ScrollView>
    </Container>
  );
};

export default AddAnnouncement;
