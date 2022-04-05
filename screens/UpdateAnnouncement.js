import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  useWindowDimensions,
} from 'react-native';
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
import {
  McIcon,
  McText,
  UpdateInput,
  CustomButton,
  CustomInput,
  CustomInputNoPadding,
} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import KeyboardAvoidingWrapper from '../constants/KeyboardAvoidingWrapper';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';

const UpdateAnnouncement = ({navigation}) => {
  const {height} = useWindowDimensions();
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
              label="Club"
              placeholder="Club"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Event Name"
              placeholder="Event Name"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Location"
              placeholder="Location"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Time"
              placeholder="Time"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Description"
              placeholder="Description"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Extra Notes"
              placeholder="Extra Notes"
              placeholderTextColor={COLORS.gray}
            />
            <View style={{marginTop: '5%'}} />
            <CustomButton
              onPress={() => navigation.navigate('EventDetails')}
              text="UPDATE ANNOUNCEMENTS"
            />
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default UpdateAnnouncement;
