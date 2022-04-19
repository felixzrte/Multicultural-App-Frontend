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
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import useFetch from '../useFetch';
import {showMessage} from 'react-native-flash-message';
import validator from '../utils/eventValidation';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";


const AddEvent = ({navigation}) => {
  const [club, setClub] = useState('');
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('');
  const [pic, setPic] = useState('');
  const [extraNotes, setExtraNotes] = useState('');

  const isValidData = () => {
    const error = validator({
      club,
      eventName,
      date,
      desc,
      location,
      pic,
      extraNotes,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  function submitEvent (club, eventName, date, desc, location, pic, extraNotes) {
    //Add any validation steps

    console.log(club);
    console.log(eventName);
    console.log(date);
    console.log(desc);
    console.log(location);
    console.log(pic);
    console.log(extraNotes);

    const checkValid = isValidData();
  if (checkValid) {
    axios.post('https://mcapp-api.herokuapp.com/api/v1/events', {
      "club": club,
      "eventName": eventName,
      "date": date,
      "desc": desc,
      "location": location,
      "pic": pic,
      "extraNotes": extraNotes,
      "deletedStatus": false
    })
    .catch(function (error) {
      console.log("error");
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
          <MenuProvider style={{}}>
        <Menu  onSelect={text => setClub(text)}>
      

          <MenuTrigger  >
          <McText style={AddStyles.headerText}>Select A Club <McText style={styles.requiredText}>*</McText></McText>
          </MenuTrigger >
          <McText style={{marginBottom: "5%"}}>Club: <McText> {club}</McText></McText>

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



            <McText>Event Name <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Event Name" value={eventName} onChangeText={text => setEventName(text)}></StyledTextInputNoPadding>
            <McText>Date <McText style={styles.requiredText}>*</McText></McText>
            
            <StyledTextInputNoPadding placeholder="YYYY/MM/DD" value={date} onChangeText={text => setDate(text)}></StyledTextInputNoPadding>
            
            <McText>Description <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Description" value={desc} onChangeText={text => setDesc(text)}></StyledTextInputNoPadding>
            </MenuProvider>
            <McText>Location <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Location" value={location} onChangeText={text => setLocation(text)}></StyledTextInputNoPadding>
            <McText>Image <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Image" value={pic} onChangeText={text => setPic(text)}></StyledTextInputNoPadding>
            <McText>Extra Notes</McText>
            <StyledTextInputNoPadding placeholder="Enter Extra Notes" value={extraNotes} onChangeText={text => setExtraNotes(text)}></StyledTextInputNoPadding>
 
            <CustomButton onPress={() => submitEvent(club, eventName, date, desc, location, pic, extraNotes)} text="Add New Event"/>
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