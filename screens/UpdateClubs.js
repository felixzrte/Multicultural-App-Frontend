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


const UpdateClubs = ({navigation}) => {
  const startReload = ()=> Restart();

  const [name, setname] = useState('');
  const [acronym, setacronym] = useState('');
  const [missionStatement, setmissionStatement] = useState('');
  const [header, setheader] = useState('');
  const [cabinetMembers, setcabinetMembers] = useState('');
  const [events, setevents] = useState('');
  const [bio, setbio] = useState('');
  const [logoImage, setlogoImage] = useState('');
  const [bannerImage, setbannerImage] = useState('');
  const [email, setemail] = useState('');
  const [instagram, setinstagram] = useState('');
  const [facebook, setfacebook] = useState('');

   const isValidData = () => {
     const error = validator({
      name,
      acronym,
      missionStatement,
      header,
      cabinetMembers,
      events,
      bio,
      logoImage,
      bannerImage,
      email,
      instagram,
      facebook,
     });
     if (error) {
       showError(error);
       return false;
     }
     return true;
   };
 
  function submitEvent (name,acronym,missionStatment,header,cabinetMembers,events,bio,logoImage,bannerImage,email,instagram,facebook,) {
    //Add any validation steps
    console.log(name);
    console.log(acronym);
    console.log(missionStatment);
    console.log(header);
    console.log(cabinetMembers);
    console.log(events);
    console.log(bio);
    console.log(logoImage);
    console.log(bannerImage);
    console.log(email);
    console.log(instagram);
    console.log(facebook);

    const checkValid = isValidData();
  if (checkValid) {
    axios.post('https://mcapp-api.herokuapp.com/api/v1/clubs', {
      "name": name,
      "acronym": acronym,
      "missionStatement": missionStatment,
      "header": header,
      "cabinetMembers": cabinetMembers,
      "events": events,
      "bio": bio,
      "logoImage": logoImage,
      "bannerImage": bannerImage,
      "email": email,
      "instagram": instagram,
      "facebook": facebook,
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
          <McText h1>Update Club</McText>
          <Line />
        </HeaderSection>
          <StyledFormArea>
          <UpdateInput
              label="Club Name"
              placeholder="Club Name"
              placeholderTextColor={COLORS.gray}
              value={name} onChangeText={text => setname(text)}
            />
            <UpdateInput
              label="Acronym"
              placeholder="Acronym"
              placeholderTextColor={COLORS.gray}
              value={acronym} onChangeText={text => setacronym(text)}
            />
            <UpdateInput
              label="Mission Statement"
              placeholder="Mission Statement"
              placeholderTextColor={COLORS.gray}
              value={missionStatement} onChangeText={text => setmissionStatement(text)}
            />
            <UpdateInput
              label="header"
              placeholder="header"
              placeholderTextColor={COLORS.gray}
              value={header} onChangeText={text => setheader(text)}
            />
            <UpdateInput
              label="cabinetMembers"
              placeholder="cabinetMembers"
              placeholderTextColor={COLORS.gray}
              value={cabinetMembers} onChangeText={text => setcabinetMembers(text)}
            />
            <UpdateInput
              label="Events"
              placeholder="Events"
              placeholderTextColor={COLORS.gray}
              value={events} onChangeText={text => setevents(text)}
            />
            <UpdateInput
              label="Bio"
              placeholder="Bio"
              placeholderTextColor={COLORS.gray}
              value={bio} onChangeText={text => setbio(text)}
            />
            <UpdateInput
              label="Logo Image"
              placeholder="logoImage"
              placeholderTextColor={COLORS.gray}
              value={logoImage} onChangeText={text => setlogoImage(text)}
            />
            <UpdateInput
              label="Banner Image"
              placeholder="Banner Image"
              placeholderTextColor={COLORS.gray}
              value={bannerImage} onChangeText={text => setbannerImage(text)}
            />
            <View style={{marginTop: "5%"}}>
            </View>
            <CustomButton onPress={() => submitEvent(name, acronym, missionStatement, header, cabinetMembers, events, bio, logoImage, bannerImage, email, instagram, facebook)} text="Submit Club"/>
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};


export default UpdateClubs;
