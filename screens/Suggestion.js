/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
  Picker,
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
  StyledMultiLine,
} from '../constants/styles';
import AddStyles, {headerText, menuContent} from '../components/AddStyles';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {StatusBar} from 'expo-status-bar';
import {McIcon, McText, CustomButton, UpdateInput} from '../components';
import styles from '../components/SuggestionStyles.js';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';

import axios from 'axios';
import KeyboardAvoidingWrapper from '../constants/KeyboardAvoidingWrapper';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const Suggestion = ({navigation}) => {
  const startReload = () => DevSettings.reload();

  const [name, setname] = useState('');
  const [suggestion, setsuggestion] = useState('');
  const [club, setClub] = useState('');

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

  function submitEvent(name, suggestion) {
    //Add any validation steps
    console.log(name);
    console.log(suggestion);

    const checkValid = isValidData();
    if (checkValid) {
      axios
        .post('https://mcapp-api.herokuapp.com/api/v1/suggestions', {
          name: name,
          suggestion: suggestion,
          deletedStatus: false,
        })
        .catch(function (error) {
          console.log('error');
        })
        .then(function (response) {
          console.log(response);
          navigation.navigate('Home');
        });
    }
  }

  return (
    <Container>
      <ScrollView>
        <TouchableOpacity
          style={{marginLeft: 16}}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.left_arrow}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
        <HeaderSection>
          <McText h1 style={{marginBottom: '-2%'}}>
            Suggestions
          </McText>
          <View style={{flexDirection: 'row'}}>
            <McText
              style={{marginTop: 8, textAlign: 'left'}}
              body4
              color="gray">
              Submit a suggestion to improve the clubs!
            </McText>
          </View>
          <Line />
        </HeaderSection>
        <KeyboardAvoidingWrapper>
          <StyledContainer>
            <InnerContainer>
              <StyledFormArea>
                <MenuProvider style={{}}>
                  <Menu onSelect={(text) => setClub(text)}>
                    <MenuTrigger>
                      <McText h2 style={{marginTop: 100}}>
                        Select A Club
                      </McText>
                    </MenuTrigger>
                    <McText>{club}</McText>
                    {/* <McText>
                      Club: <McText>JOE ENTER YOUR CLUB VARIABLE HERE</McText>
                    </McText> */}

                    <MenuOptions style={{}}>
                      <MenuOption value={'La Alianza Latina'}>
                        <McText>La Alianza Latina</McText>
                      </MenuOption>
                      <MenuOption value={'Black Student Union'}>
                        <McText>Black Student Union</McText>
                      </MenuOption>
                      <MenuOption value={'Caribbean Student Association'}>
                        <McText>Caribbean Student Association</McText>
                      </MenuOption>
                      <MenuOption value={'Asian Student Association'}>
                        <McText>Asian Student Association</McText>
                      </MenuOption>
                      <MenuOption value={'African Student Union'}>
                        <McText>African Student Union</McText>
                      </MenuOption>
                      <MenuOption value={'International Student Association'}>
                        <McText>International Student Association</McText>
                      </MenuOption>
                      <MenuOption value={'Multicultural Council'}>
                        <McText>Multicultural Council</McText>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>

                  <McText
                    style={{
                      marginBottom: '5%',
                      marginTop: '5%',
                      opacity: 0.6,
                    }}>
                    Feel free to be completly honest all of your feedback is
                    submitted anonymously!
                  </McText>

                  <StyledMultiLine
                    style={{}}
                    multiline={true}
                    numberOfLines={5}
                    textAlign="left"
                    placeholder="Enter Suggestion Here!"
                    placeholderTextColor={COLORS.gray}
                    value={suggestion}
                    onChangeText={(text) => setsuggestion(text)}
                  />
                </MenuProvider>
                <McText
                  style={{marginBottom: '5%', marginTop: '5%', opacity: 0.6}}>
                  If you do not wish to be indentified make sure not to mention
                  your name or contact information.
                </McText>

                <CustomButton
                  style={{}}
                  onPress={() => submitEvent(name, suggestion)}
                  text="Submit Suggestion"
                />
              </StyledFormArea>
            </InnerContainer>
          </StyledContainer>
        </KeyboardAvoidingWrapper>
      </ScrollView>
    </Container>
  );
};

export default Suggestion;
