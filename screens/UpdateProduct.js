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


const UpdateProduct = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [hidePassword, setHidePassword] = useState(true);
  const [state, setState] = useState({
    isLoading: false,
    merchItemname: '',
    merchItemprice: '',
    description: '',
    contactEmail: '',
    contactNumber: '',
    extraNotes: '',
    numSmall: '',
    numMedium: '',
    numLarge: '',
  });

  const {isLoading, merchItemname, merchItemprice, description, contactEmail, contactNumber, extraNotes, numSmall, numMedium, numLarge} = state;
  const updateState = (data) => setState(() => ({...state, ...data}));



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
              onChangeText={(merchItemname) => updateState({merchItemname})}
            />
            <UpdateInput
              label="Item Price"
              placeholder="Item Price"
              placeholderTextColor={COLORS.gray}
              onChangeText={(merchItemprice) => updateState({merchItemprice})}
            />
            <UpdateInput
              label="Description"
              placeholder="Description"
              placeholderTextColor={COLORS.gray}
              onChangeText={(description) => updateState({description})}
            />
            <UpdateInput
              label="Contact Email"
              placeholder="Contact Email"
              placeholderTextColor={COLORS.gray}
              onChangeText={(contactEmail) => updateState({contactEmail})}
            />
            <UpdateInput
              label="Contact Number"
              placeholder="Contact Number"
              placeholderTextColor={COLORS.gray}
              onChangeText={(contactNumber) => updateState({contactNumber})}
            />
            <UpdateInput
              label="Small"
              placeholder="Small"
              placeholderTextColor={COLORS.gray}
              onChangeText={(numSmall) => updateState({numSmall})}
            />
            <UpdateInput
              label="Medium"
              placeholder="Medium"
              placeholderTextColor={COLORS.gray}
              onChangeText={(numMedium) => updateState({numMedium})}
            />
            <UpdateInput
              label="Large"
              placeholder="Large"
              placeholderTextColor={COLORS.gray}
              onChangeText={(numLarge) => updateState({numLarge})}
            />
            <View style={{marginTop: "5%"}}>
            </View>
            <CustomButton
              onPress={() => navigation.navigate('Product')}
              isLoading={isLoading}
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
