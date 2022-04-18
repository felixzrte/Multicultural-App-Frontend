import {View, Text, ScrollView, StyleSheet, useWindowDimensions, Button} from 'react-native';
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
import {StatusBar} from 'expo-status-bar';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';
import useFetch from '../useFetch';
import axios from 'axios';
import { useForm } from "react-hook-form";
import validator from '../utils/merchValidation';


const AddMerch = ({navigation}) => {

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



  // const {
  //   data: merchs,
  //   loading,
  //   error,
  // } = useFetch('https://mcapp-api.herokuapp.com/api/v1/AddMerch');
  // /*
  //   if (loading) {
  //     return null;
  //   }
  // */
  // if (error) {
  //   console.log(error);
  // }
  // console.log(merchs);
  
//add handle input here


  return (
    <Container>
      <ScrollView>
        <HeaderSection>
          <McText h1>Merch</McText>
            <View style={{flexDirection:'row'}}>
              <McText style={{marginTop: 10, textAlign:'left'}} body4 color="gray">Add a new article of club merchandise!</McText>
            </View>
            <Line />
          </HeaderSection>

    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <SubTitle>Add a New Item of Merchandise</SubTitle>
          <StyledFormArea>
            <McText>Item Name <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Item Name" value={merchItemName} onChangeText={text => setMerchItemName(text)}></StyledTextInputNoPadding>
            <McText>Item Price <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Price" value={merchItemPrice} onChangeText={text => setMerchItemPrice(text)}></StyledTextInputNoPadding>
            <McText>Picture <McText style={styles.requiredText}>*</McText></McText>
            {/* <CustomButton
              onPress={onSignup}
              isLoading={isLoading}
              text="Add Image From Gallary"
            /> */} 
            <StyledTextInputNoPadding placeholder="Enter Picture" value={pic} onChangeText={text => setPic(text)}></StyledTextInputNoPadding>
            <McText>Email <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Email" value={contactEmail} onChangeText={text => setContactEmail(text)}></StyledTextInputNoPadding>
            <McText>Phone Number <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Phone Number" value={contactNumber} onChangeText={text => setContactNumber(text)}></StyledTextInputNoPadding>
            <McText>Description <McText style={styles.requiredText}>*</McText></McText>
            <StyledTextInputNoPadding placeholder="Enter Description" value={description} onChangeText={text => setDescription(text)}></StyledTextInputNoPadding>
            <McText>Number of Smalls</McText>
            <StyledTextInputNoPadding placeholder="Enter Number of Smalls" value={numSmall} onChangeText={text => setNumSmall(text)}></StyledTextInputNoPadding>
            <McText>Number of Mediums</McText>
            <StyledTextInputNoPadding placeholder="Enter Number of Mediums" value={numMedium} onChangeText={text => setNumMedium(text)}></StyledTextInputNoPadding>
            <McText>Number of Larges</McText>
            <StyledTextInputNoPadding placeholder="Enter Numbers of Larges" value={numLarge} onChangeText={text => setNumLarge(text)}></StyledTextInputNoPadding>

            <CustomButton onPress={() => submitMerch(merchItemName, merchItemPrice, pic, contactEmail, contactNumber, description, numSmall, numMedium, numLarge)} text="Add New Merch Item"/>

            <Line />
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
    </ScrollView>
    </Container>
  );
};

export default AddMerch;