
import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, TextInput, useWindowDimensions, Button} from 'react-native';
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
import useFetch from '../useFetch';
import axios from 'axios';
import {Restart} from 'fiction-expo-restart';

const UpdateEvents = ({navigation}) => {
  const startReload = ()=> Restart();
  const {height} = useWindowDimensions();
  const [hidePassword, setHidePassword] = useState(true);
  const [state, setState] = useState({
    isLoading: false,
    club: '',
    eventName: '',
    location: '',
    time: '',
    description: '',
    extraNotes: '',
  });

  const {isLoading, club, eventName, location, time, description, extraNotes} = state;
  const updateState = (data) => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      club,
      eventName,
      location,
      time,
      description,
      extraNotes,
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
          name: club,
          eventName,
          location,
          time,
          description,
          extraNotes,
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
              onChangeText={(club) => updateState({club})}
            />
            <UpdateInput
              label="Event Name"
              placeholder="Event Name"
              placeholderTextColor={COLORS.gray}
              onChangeText={(eventName) => updateState({eventName})}
            />
            <UpdateInput
              label="Location"
              placeholder="Location"
              placeholderTextColor={COLORS.gray}
              onChangeText={(location) => updateState({location})}
            />
            <UpdateInput
              label="Time"
              placeholder="Time"
              placeholderTextColor={COLORS.gray}
              onChangeText={(time) => updateState({time})}
            />
            <UpdateInput
              label="Description"
              placeholder="Description"
              placeholderTextColor={COLORS.gray}
              onChangeText={(description) => updateState({description})}
            />
            <UpdateInput
              label="Extra Notes"
              placeholder="Extra Notes"
              placeholderTextColor={COLORS.gray}
              onChangeText={(extraNotes) => updateState({extraNotes})}
            />
            <View style={{marginTop: "5%"}}>
            </View>
            <CustomButton
              onPress={onSignup}
              isLoading={isLoading}
              text="UPDATE EVENTS"
            />
            <Button title="Reload" onPress={startReload}/>
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};


export default UpdateEvents;
