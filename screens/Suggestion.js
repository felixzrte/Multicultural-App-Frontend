import React, { useState } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';

import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
  Picker
} from 'react-native';
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
  Container,
  StyledMultiLine
  } from '../constants/styles';
  import AddStyles, {headerText, menuContent} from '../components/AddStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText, CustomButton, UpdateInput} from '../components';
import styles from '../components/SuggestionStyles.js';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';
import KeyboardAvoidingWrapper from '../constants/KeyboardAvoidingWrapper';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

const Suggestion = ({navigation}) => {
  



  const [name, setname] = useState('');
  const [suggestion, setsuggestion] = useState('');

   const isValidData = () => {
     const error = validator({
      name,
      suggestion,
     });
     if (error) {
       showError(error);
       return false;
     }
     return true;
   };
 
  function submitEvent (name, suggestion) {
    //Add any validation steps
    console.log(name);
    console.log(suggestion);


    const checkValid = isValidData();
  if (checkValid) {
    axios.post('https://mcapp-api.herokuapp.com/api/v1/suggestions', {
      "name": name,
      "suggestion": suggestion,
      "deletedStatus": false
    })
    .catch(function (error) {
      console.log("error");
    })
    .then(function (response) {
      console.log(response);
      navigation.navigate('Home')
    });
  }
  };

  

  return (
    
    <Container>
      
    <ScrollView>
      <HeaderSection>
        <McText h1 style={{marginBottom: '-2%'}}>Suggestions</McText>
          <View style={{flexDirection:'row'}}>
            <McText style={{marginTop: 1, textAlign:'left'}} body4 color="gray">Submit a suggestion to improve the club!</McText>
          </View>
          <Line />
        </HeaderSection>

        <KeyboardAvoidingWrapper>
          
      <StyledContainer>
                
        <InnerContainer>
            
            <SubTitle>
                Enter a Suggestion:
              </SubTitle>

              <StyledFormArea>

              <MenuProvider style={{}}>
        <Menu  onSelect={value => alert(`You Clicked : ${value}`)}>

          <MenuTrigger  >
          <McText style={AddStyles.headerText}>Select A Club</McText>
          </MenuTrigger  >
          <McText>Club: <McText>JOE ENTER YOUR CLUB VARIABLE HERE</McText></McText>

          <MenuOptions style={{}}>
            
            <MenuOption value={"La Alianza Latina"}>
              <Text style={AddStyles.menuContent}>La Alianza Latina</Text>
            </MenuOption>
            <MenuOption value={"Black Student Union"}>
              <Text style={AddStyles.menuContent}>Black Student Union</Text>
            </MenuOption>
            <MenuOption value={"Caribbean Student Association"}>
              <Text style={AddStyles.menuContent}>Caribbean Student Association</Text>
            </MenuOption>
            <MenuOption value={"Asian Student Association"}>
              <Text style={AddStyles.menuContent}>Asian Student Association</Text>
            </MenuOption>
            <MenuOption value={"African Student Union"}>
              <Text style={AddStyles.menuContent}>African Student Union</Text>
            </MenuOption>
            <MenuOption value={"International Student Association"}>
              <Text style={AddStyles.menuContent}>International Student Association</Text>
            </MenuOption>
            <MenuOption value={"Multicultural Council"}>
              <Text style={AddStyles.menuContent}>Multicultural Council</Text>
            </MenuOption>
         
          </MenuOptions>

        </Menu>
      
              
              
              <McText style={{marginBottom: "5%", marginTop: "5%"}}>Feel free to be completly honest all of your feedback is submitted anonymously!</McText>


              <StyledMultiLine
              style={{}}
              multiline={true}
              numberOfLines={5}
              textAlign="left"
              placeholder="Suggestion"
              placeholderTextColor={COLORS.gray}
              value={suggestion} onChangeText={text => setsuggestion(text)}
            />
          
            <McText style={{marginBottom: "5%", marginTop: "5%"}}>If you do not wish to be indentified make sure not to mention your name or contact information.</McText>
            
           
              <CustomButton style={{}} onPress={() => submitEvent(name, suggestion)} text="Submit Suggestion"/>
              </MenuProvider>
            </StyledFormArea>
            
            </InnerContainer>
            </StyledContainer>
    </KeyboardAvoidingWrapper>
      </ScrollView>
      </Container>
    
  );
};

export default Suggestion;
