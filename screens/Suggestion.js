import React, { useState } from 'react';
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
  } from '../constants/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText, CustomButton, UpdateInput} from '../components';
import styles from '../components/SuggestionStyles.js';
import KeyboardAvoidingWrapper from '../constants/KeyboardAvoidingWrapper';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';

const Suggestion = ({navigation}) => {
  const startReload = ()=> Restart();

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
    <View style={{backgroundColor: '#0277bd'}}>
      <SafeAreaView>
          <View style={{backgroundColor: 'white'}}>
            <View style={styles.header}>
              <McText
                h1
                style={{
                  marginTop: '7%',
                  marginLeft: '5%',
                  marginBottom: '10%',
                  color: 'white',
                }}>
                Suggestions
              </McText>
            </View>
          </View>
                <View style={{backgroundColor: 'white', marginBottom: '10%'}}>
            <View
              style={{
                marginTop: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
            </View>
            <McText
                h2
                style={{
                  marginTop: '7%',
                  marginLeft: '25%',
                  color: 'black',
                }}>
                Enter a Suggestion:
              </McText>
              <View style={{margin: "5%"}}>
              <UpdateInput
              placeholder="Name"
              placeholderTextColor={COLORS.gray}
              value={name} onChangeText={text => setname(text)}
            />
              <UpdateInput
              placeholder="Suggestion"
              placeholderTextColor={COLORS.gray}
              value={suggestion} onChangeText={text => setsuggestion(text)}
            />
            </View>
            <View
              style={{
                marginLeft: '10%',
                marginRight: '10%',
                marginTop: '15%',
                marginBottom: '80%',
              }}>
              <CustomButton onPress={() => submitEvent(name, suggestion)} text="Submit Suggestion"/>
            </View>
          </View>
    </SafeAreaView>
    </View>
  );
};

export default Suggestion;
