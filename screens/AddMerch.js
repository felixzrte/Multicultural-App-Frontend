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
import {StatusBar} from 'expo-status-bar';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';
import useFetch from '../useFetch';
import axios from 'axios';
import { useForm } from "react-hook-form";
import {Restart} from 'fiction-expo-restart';


const AddMerch = ({navigation}) => {

  const startReload = ()=> Restart();

  const [merchItemName, setMerchItemName] = useState('');
  const [merchItemPrice, setMerchItemPrice] = useState('');
  const [pic, setPic] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');

  function refreshPage() {
    window.location.reload(false);
  }
 
  function submitMerch (merchItemName, merchItemPrice, pic, contactEmail, contactNumber, description) {
    //Add any validation steps
    console.log(merchItemName);
    console.log(merchItemPrice);
    console.log(pic);
    console.log(contactEmail);
    console.log(contactNumber);
    console.log(description);
  
    axios.post('https://mcapp-api.herokuapp.com/api/v1/merchs', {
      "merchItemName": merchItemName,
      "merchItemPrice": merchItemPrice,
      "pic": pic,
      "contactEmail": contactEmail,
      "contactNumber": contactNumber,
      "description": description,
      "deletedStatus": false
    })
    .then(function (response) {
      console.log(response);
      navigation.navigate('Merch')
    })
    .catch(function (error) {
      console.log("error");
    });
  };



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
            <McText>Item Name</McText>
            <StyledTextInputNoPadding placeholder="Enter Item Name" value={merchItemName} onChangeText={text => setMerchItemName(text)}></StyledTextInputNoPadding>
            <McText>Item Price</McText>
            <StyledTextInputNoPadding placeholder="Enter Price" value={merchItemPrice} onChangeText={text => setMerchItemPrice(text)}></StyledTextInputNoPadding>
            <McText>Picture</McText>
            {/* <CustomButton
              onPress={onSignup}
              isLoading={isLoading}
              text="Add Image From Gallary"
            /> */} 
            <StyledTextInputNoPadding placeholder="Enter Picture" value={pic} onChangeText={text => setPic(text)}></StyledTextInputNoPadding>
            <McText>Email</McText>
            <StyledTextInputNoPadding placeholder="Enter Email" value={contactEmail} onChangeText={text => setContactEmail(text)}></StyledTextInputNoPadding>
            <McText>Phone Number</McText>
            <StyledTextInputNoPadding placeholder="Enter Phone Number" value={contactNumber} onChangeText={text => setContactNumber(text)}></StyledTextInputNoPadding>
            <McText>Description</McText>
            <StyledTextInputNoPadding placeholder="Enter Description" value={description} onChangeText={text => setDescription(text)}></StyledTextInputNoPadding>
            <McText>Number of Smalls</McText>
            <StyledTextInputNoPadding placeholder="Enter Number of Smalls" ></StyledTextInputNoPadding>
            <McText>Number of Mediums</McText>
            <StyledTextInputNoPadding placeholder="Enter Number of Mediums"></StyledTextInputNoPadding>
            <McText>Number of Larges</McText>
            <StyledTextInputNoPadding placeholder="Enter Numbers of Larges" ></StyledTextInputNoPadding>

            <CustomButton onPress={() =>onPress= submitMerch(merchItemName, merchItemPrice, pic, contactEmail, contactNumber, description)} text="Add New Item"/>
            <Button title="Reload" onPress={startReload}/>
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