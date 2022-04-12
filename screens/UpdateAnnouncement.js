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


const UpdateAnnouncement = ({navigation}) => {
  const startReload = ()=> Restart();

  const [announcementTitle, setannouncementTitle] = useState('');
  const [announcementContents, setannouncementContents] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');


   const isValidData = () => {
     const error = validator({
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
 
  function submitEvent (announcementTitle, announcementContents, startDate, endDate,) {
    //Add any validation steps
    console.log(announcementTitle);
    console.log(announcementContents);
    console.log(startDate);
    console.log(desc);
    console.log(endDate);

    const checkValid = isValidData();
  if (checkValid) {
    axios.post('https://mcapp-api.herokuapp.com/api/v1/announcements', {
      "announcementTitle": announcementTitle,
      "announcementContents": announcementContents,
      "startDate": startDate,
      "endDate": endDate,
      "deletedStatus": false
    })
    .catch(function (error) {
      console.log("error");
    })
    .then(function (response) {
      console.log(response);
      navigation.navigate('Club')
    });
  }
  };



  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
        <HeaderSection>
          <McText h1>Update Announcement</McText>
          <Line />
        </HeaderSection>
          <StyledFormArea>
            <UpdateInput
              label="Announcement Title"
              placeholder="Announcement Title"
              placeholderTextColor={COLORS.gray}
              value={announcementTitle} onChangeText={text => setannouncementTitle(text)}
            />
            <UpdateInput
              label="Announcement Contents"
              placeholder="Announcement Contents"
              placeholderTextColor={COLORS.gray}
              value={announcementContents} onChangeText={text => setannouncementContents(text)}
            />
            <UpdateInput
              label="Start Date"
              placeholder="Start Date"
              placeholderTextColor={COLORS.gray}
              value={startDate} onChangeText={text => setstartDate(text)}
            />
            <UpdateInput
              label="Time"
              placeholder="Time"
              placeholderTextColor={COLORS.gray}
              value={endDate} onChangeText={text => setendDate(text)}
            />
            <View style={{marginTop: "5%"}}>
            </View>
            <CustomButton onPress={() => submitEvent(announcementTitle, announcementContents, startDate, endDate,)} text="Submit Announcement"/>
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};


export default UpdateAnnouncement;
