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


const UpdateProduct = ({navigation}) => {
  const startReload = ()=> Restart();

  const [merchItemName, setMerchItemName] = useState('');
  const [merchItemPrice, setMerchItemPrice] = useState('');
  const [pic, setPic] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');
  const [numSmall, setNumSmall] = useState('');
  const [numMedium, setNumMedium] = useState('');
  const [numLarge, setNumLarge] = useState('');

   const isValidData = () => {
     const error = validator({
       merchItemName,
       merchItemPrice,
       pic,
       contactEmail,
       contactNumber,
       description,
       numSmall,
       numMedium,
       numLarge,
     });
     if (error) {
       showError(error);
       return false;
     }
     return true;
   };
 
  function submitMerch (merchItemName, merchItemPrice, pic, contactEmail, contactNumber, description, numSmall, numMedium, numLarge) {
    //Add any validation steps
    console.log(merchItemName);
    console.log(merchItemPrice);
    console.log(pic);
    console.log(contactEmail);
    console.log(contactNumber);
    console.log(description);
    console.log(numSmall);
    console.log(numMedium);
    console.log(numLarge);

    const checkValid = isValidData();
  if (checkValid) {
    axios.post('https://mcapp-api.herokuapp.com/api/v1/merchs', {
      "merchItemName": merchItemName,
      "merchItemPrice": merchItemPrice,
      "pic": pic,
      "contactEmail": contactEmail,
      "contactNumber": contactNumber,
      "description": description,
      "numSmall": numSmall,
      "numMedium": numMedium,
      "numLarge": numLarge,
      "deletedStatus": false
    })
    .catch(function (error) {
      console.log("error");
    })
    .then(function (response) {
      console.log(response);
      navigation.navigate('Merch')
    });
  }
  };


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
              value={merchItemName} onChangeText={text => setMerchItemName(text)}
            />
            <UpdateInput
              label="Item Price"
              placeholder="Item Price"
              placeholderTextColor={COLORS.gray}
              value={merchItemPrice} onChangeText={text => setMerchItemPrice(text)}
            />
            <UpdateInput
              label="Picture"
              placeholder="Picture"
              placeholderTextColor={COLORS.gray}
              value={pic} onChangeText={text => setPic(text)}
            />
            <UpdateInput
              label="Contact Email"
              placeholder="Contact Email"
              placeholderTextColor={COLORS.gray}
              value={contactEmail} onChangeText={text => setContactEmail(text)}
            />
            <UpdateInput
              label="Contact Number"
              placeholder="Contact Number"
              placeholderTextColor={COLORS.gray}
              value={contactNumber} onChangeText={text => setContactNumber(text)}
            />
            <UpdateInput
              label="Description"
              placeholder="Description"
              placeholderTextColor={COLORS.gray}
              value={description} onChangeText={text => setDescription(text)}
            />
            <UpdateInput
              label="Small"
              placeholder="Small"
              placeholderTextColor={COLORS.gray}
              value={numSmall} onChangeText={text => setNumSmall(text)}
            />
            <UpdateInput
              label="Medium"
              placeholder="Medium"
              placeholderTextColor={COLORS.gray}
              value={numMedium} onChangeText={text => setNumMedium(text)}
            />
            <UpdateInput
              label="Large"
              placeholder="Large"
              placeholderTextColor={COLORS.gray}
              value={numLarge} onChangeText={text => setNumLarge(text)}
            />
            <View style={{marginTop: "5%"}}>
            </View>
            <CustomButton onPress={() => submitMerch(merchItemName, merchItemPrice, pic, contactEmail, contactNumber, description, numSmall, numMedium, numLarge)} text="Add New Merch Item"/>
            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};


export default UpdateProduct;
