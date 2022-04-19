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
import styles from '../components/AddStyles';
import AddStyles, {headerText, menuContent} from '../components/AddStyles';
import {StatusBar} from 'expo-status-bar';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import validator from '../utils/announcementValidation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";


const AddAnnouncement = ({navigation}) => {
  const [clubName, setClubName] = useState('');
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementContents, setAnnouncementContents] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const isValidData = () => {
    const error = validator({
      clubName,
      announcementTitle,
      announcementContents,
      startDate,
      endDate,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  function submitAnnouncement (clubName, announcementTitle, announcementContents, startDate, endDate) {
    //Add any validation steps
    console.log(clubName);
    console.log(announcementTitle);
    console.log(announcementContents);
    console.log(startDate);
    console.log(endDate);

    const checkValid = isValidData();
  if (checkValid) {
    axios.post('https://mcapp-api.herokuapp.com/api/v1/announcements', {
      "announcementTitle": announcementTitle,
      "announcementContents": announcementContents,
      "club": clubName,
      "startDate": startDate,
      "endDate": endDate,
      "deletedStatus": false
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response) {
      console.log("THIS IS THE response");
      console.log(response);
      navigation.navigate('Home')
    });
  }
  };

  return (
    <Container>
      <ScrollView>
        <HeaderSection>
          <McText h1>Announcements</McText>
            <View style={{flexDirection:'row'}}>
              <McText style={{marginTop: 10, textAlign:'left'}} body4 color="gray">Add a new announcement!</McText>
            </View>
            <Line />
          </HeaderSection>

    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <SubTitle>Add a New Announcement</SubTitle>
          <StyledFormArea>

          <MenuProvider style={{}}>
        <Menu  onSelect={text => setClubName(text)}>
      

          <MenuTrigger  >
          <McText style={AddStyles.headerText}>Select A Club <McText style={styles.requiredText}>*</McText></McText>
          </MenuTrigger >
          <McText style={{marginBottom: "5%"}}>Club: <McText> {clubName}</McText></McText>

          <MenuOptions style={{}}>
            
            <MenuOption value={"La Alianza Latina"}>
              <McText >La Alianza Latina</McText>
            </MenuOption>
            <MenuOption value={"Black Student Union"}>
              <McText >Black Student Union</McText>
            </MenuOption>
            <MenuOption value={"Caribbean Student Association"}>
              <McText >Caribbean Student Association</McText>
            </MenuOption>
            <MenuOption value={"Asian Student Association"}>
              <McText >Asian Student Association</McText>
            </MenuOption>
            <MenuOption value={"African Student Union"}>
              <McText >African Student Union</McText>
            </MenuOption>
            <MenuOption value={"International Student Association"}>
              <McText >International Student Association</McText>
            </MenuOption>
            <MenuOption value={"Multicultural Council"}>
              <McText >Multicultural Council</McText>
            </MenuOption>
          </MenuOptions>
        </Menu>

            <McText>Announcement Title <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Announcement Title" value={announcementTitle} onChangeText={text => setAnnouncementTitle(text)}></StyledTextInputNoPadding>
            <McText>Announcement Contents <McText style={styles.requiredText}>*</McText></McText>
            
            <StyledTextInputNoPadding placeholder="Enter Announcement Contents" value={announcementContents} onChangeText={text => setAnnouncementContents(text)}></StyledTextInputNoPadding>
            
            <McText>Start Date <McText style={styles.requiredText}>*</McText></McText>
            </MenuProvider>
            <StyledTextInputNoPadding placeholder="YYYY/MM/DD" value={startDate} onChangeText={text => setStartDate(text)}></StyledTextInputNoPadding>
            
            <McText>End Date <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="YYYY/MM/DD" value={endDate} onChangeText={text => setEndDate(text)}></StyledTextInputNoPadding>
            
 
            <CustomButton onPress={() => submitAnnouncement(clubName, announcementTitle, announcementContents, startDate, endDate)} text="Add New Announcement"/>
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