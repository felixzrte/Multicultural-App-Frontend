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

const UpdateClubs = ({navigation}) => {
  const {height} = useWindowDimensions();
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
            />
            <UpdateInput
              label="Bio"
              placeholder="Bio"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Instagram"
              placeholder="Instagram"
              placeholderTextColor={COLORS.gray}
            />
            <View style={{marginTop: '5%'}} />
            <CustomButton
              onPress={() => navigation.navigate('Club')}
              text="UPDATE CLUBS"
            />
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default UpdateClubs;
