import {View, Text, ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
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
import {StatusBar} from 'expo-status-bar';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';
import useFetch from '../useFetch';
import axios from 'axios';

const AddMerch = ({navigation}) => {

  var merchItem = {merchItemName, merchItemPrice, pic, contactEmail, contactNumber, description}
  this.merchItem;
  var merchItemName;
  var merchItemPrice;
  var pic;
  var contactEmail;
  var contactNumber;
  var description;


  const {
    data: merchs,
    loading,
    error,
  } = useFetch('https://mcapp-api.herokuapp.com/api/v1/AddMerch');
  /*
    if (loading) {
      return null;
    }
  */
  if (error) {
    console.log(error);
  }
  console.log(merchs);

 const submitMerch = (merchItem) =>{
   //Add any validation steps
   let newMerch = {newMerchItemName: merchItem.merchItemName, newMerchItemPrice: merchItem.merchItemPrice, 
    newPic: merchItem.pic, newContactEmail: merchItem.contactEmail, newContactNumber: merchItem.contactNumber, 
    newDescription: merchItem.description}
    console.log(merchItem);
    console.log(newMerch);
  axios.post('https://mcapp-api.herokuapp.com/api/v1/merchs', {
    "merchItemName": newMerch.newMerchItemName,
    "merchItemPrice": newMerch.newMerchItemPrice,
    "pic": newMerch.newPic,
    "contactEmail": newMerch.newContactEmail,
    "contactNumber": newMerch.newContactNumber,
    "description": newMerch.newDescription,
    "deletedStatus": false
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
  

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
            <McText>Item Name</McText>
            <StyledTextInputNoPadding placeholder="Enter Item Name" value={(this.merchItem.merchItemName)} onChangeText={this.merchItem}></StyledTextInputNoPadding>
            <McText>Item Price</McText>
            <StyledTextInputNoPadding placeholder="Enter Price" onChangeText={(this.merchItem.merchItemPrice)}></StyledTextInputNoPadding>
            <McText>Picture</McText>
            {/* <CustomButton
              onPress={onSignup}
              isLoading={isLoading}
              text="Add Image From Gallary"
            /> */} 
            <StyledTextInputNoPadding placeholder="Enter Picture" onChangeText={(this.merchItem.pic)}></StyledTextInputNoPadding>
            <McText>Email</McText>
            <StyledTextInputNoPadding placeholder="Enter Email" onChangeText={(this.merchItem.contactEmail)}></StyledTextInputNoPadding>
            <McText>Phone Number</McText>
            <StyledTextInputNoPadding placeholder="Enter Phone Number" onChangeText={(this.merchItem.contactNumber)}></StyledTextInputNoPadding>
            <McText>Description</McText>
            <StyledTextInputNoPadding placeholder="Enter Description" onChangeText={(this.merchItem.description)}></StyledTextInputNoPadding>
            <McText>Number of Smalls</McText>
            <StyledTextInputNoPadding placeholder="Enter Number of Smalls" ></StyledTextInputNoPadding>
            <McText>Number of Mediums</McText>
            <StyledTextInputNoPadding placeholder="Enter Number of Mediums"></StyledTextInputNoPadding>
            <McText>Number of Larges</McText>
            <StyledTextInputNoPadding placeholder="Enter Numbers of Larges" ></StyledTextInputNoPadding>

            <CustomButton onPress={submitMerch} text="Add New Item"/>
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