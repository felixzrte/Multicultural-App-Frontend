
import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, TextInput, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {
DiscoverContainer,
Line,
SubHeader,
HeaderSection,
InnerContainer,
StyledContainer,
Logo,
SubTitle,
StyledFormArea,
StyledButton,
ExtraView,
ButtonText,
ExtraText,
TextLink,
TextLinkContent,
} from '../constants/styles';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText, UpdateInput, CustomButton, CustomInput, CustomInputNoPadding} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import KeyboardAvoidingWrapper from '../constants/KeyboardAvoidingWrapper';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';


const UpdateEvents = ({navigation}) => {
  const startReload = ()=> Restart();

  const [club, setclub] = useState('');
  const [eventName, seteventName] = useState('');
  const [date, setdate] = useState('');
  const [desc, setdesc] = useState('');
  const [location, setlocation] = useState('');
  const [attendence, setattendence] = useState('');
  const [image, setimage] = useState('');
  const [favorite, setfavorite] = useState('');
  const [extraNotes, setextraNotes] = useState('');

   const isValidData = () => {
     const error = validator({
       club,
       eventName,
       date,
       desc,
       location,
       attendence,
       image,
       favorite,
       extraNotes,
     });
     if (error) {
       showError(error);
       return false;
     }
     return true;
   };
 
  function submitEvent (club, eventName, date, desc, location, attendence, image, favorite, extraNotes) {
    //Add any validation steps
    console.log(club);
    console.log(eventName);
    console.log(date);
    console.log(desc);
    console.log(location);
    console.log(attendence);
    console.log(image);
    console.log(favorite);
    console.log(extraNotes);

    const checkValid = isValidData();
  if (checkValid) {
    axios.post('https://mcapp-api.herokuapp.com/api/v1/events', {
      "club": club,
      "eventName": eventName,
      "date": date,
      "desc": desc,
      "location": location,
      "attendence": attendence,
      "image": image,
      "favorite": favorite,
      "extraNotes": extraNotes,
      "deletedStatus": false
    })
    .catch(function (error) {
      console.log("error");
    })
    .then(function (response) {
      console.log(response);
      navigation.navigate('EventDetails')
    });
  }
  };



  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
        <HeaderSection>
          <McText h1>Update Events</McText>
          <Line />
        </HeaderSection>
          <StyledFormArea>
            <UpdateInput
              label="Club"
              placeholder="Club"
              placeholderTextColor={COLORS.gray}
              value={club} onChangeText={text => setclub(text)}
            />
            <UpdateInput
              label="Event Name"
              placeholder="Event Name"
              placeholderTextColor={COLORS.gray}
              value={eventName} onChangeText={text => seteventName(text)}
            />
            <UpdateInput
              label="Date"
              placeholder="Date"
              placeholderTextColor={COLORS.gray}
              value={date} onChangeText={text => setdate(text)}
            />
            <UpdateInput
              label="Description"
              placeholder="Description"
              placeholderTextColor={COLORS.gray}
              value={desc} onChangeText={text => setdesc(text)}
            />
            <UpdateInput
              label="Location"
              placeholder="Location"
              placeholderTextColor={COLORS.gray}
              value={location} onChangeText={text => setlocation(text)}
            />
            <UpdateInput
              label="Attendence"
              placeholder="Attendence"
              placeholderTextColor={COLORS.gray}
              value={attendence} onChangeText={text => setattendence(text)}
            />
            <UpdateInput
              label="Image"
              placeholder="Image"
              placeholderTextColor={COLORS.gray}
              value={image} onChangeText={text => setimage(text)}
            />
            <UpdateInput
              label="Favorite"
              placeholder="Favorite"
              placeholderTextColor={COLORS.gray}
              value={favorite} onChangeText={text => setfavorite(text)}
            />
            <UpdateInput
              label="ExtraNotes"
              placeholder="ExtraNotes"
              placeholderTextColor={COLORS.gray}
              value={extraNotes} onChangeText={text => setextraNotes(text)}
            />
            <View style={{marginTop: "5%"}}>
            </View>
            <CustomButton onPress={() => submitEvent(club, eventName, date, desc, location, attendence, image, favorite, extraNotes)} text="Submit Event"/>
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};


export default UpdateEvents;
/*
name
suggestion
*/