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

const UpdateProduct = ({navigation}) => {
  const {height} = useWindowDimensions();
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <HeaderSection>
            <McText h1>Update Product</McText>
            <Line />
          </HeaderSection>
          <StyledFormArea>
            <UpdateInput
              label="Product name"
              placeholder="Product Name"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Item Price"
              placeholder="Item Price"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Description"
              placeholder="Description"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Contact Email"
              placeholder="Contact Email"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Contact Number"
              placeholder="Contact Number"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Small"
              placeholder="Small"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Medium"
              placeholder="Medium"
              placeholderTextColor={COLORS.gray}
            />
            <UpdateInput
              label="Large"
              placeholder="Large"
              placeholderTextColor={COLORS.gray}
            />
            <View style={{marginTop: '5%'}} />
            <CustomButton
              onPress={() => navigation.navigate('Product')}
              text="UPDATE PRODUCTS"
            />
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default UpdateProduct;
