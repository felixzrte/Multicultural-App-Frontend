import React, {useState} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText, CustomButton} from '../components';
import {SubHeader, Container, HeaderSection, Line} from '../constants/styles';
import styles from '../components/SuggestionStyles.js';
import validator from '../utils/validation';
import {showError} from '../utils/helperFunction';
import actions from '../redux/actions';
import {showMessage} from 'react-native-flash-message';


const Suggestion = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [hidePassword, setHidePassword] = useState(true);
  const [state, setState] = useState({
    isLoading: false,
    suggestion: '',
  });
  const {isLoading, suggestion} = state;
  const updateState = (data) => setState(() => ({...state, ...data}));


  const isValidData = () => {
    const error = validator({
    suggestion,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onSignup = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({isLoading: true});
      try {
        const res = await actions.signup({
          name: suggestion,
        });
        console.log('res for signup====>', res);
        showMessage('Registered Successfully');
        updateState({isLoading: false});
        navigation.goBack();
      } catch (error) {
        console.log('error raised');
        showError(error.message);
        updateState({isLoading: false});
      }
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
                  marginBottom: '10%',
                  color: 'black',
                }}>
                Enter a Suggestion:
              </McText>
            <TextInput
              style={{
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 0.5,
                marginLeft: '5%',
                marginRight: '5%',
                alignItems: 'center',
                padding: '5%',
              }}
            />

            <View
              style={{
                marginRight: '10%',
                marginLeft: '10%',
                marginTop: '15%',
                marginBottom: '60%',
              }}>
            <CustomButton
              onPress={onSignup}
              isLoading={isLoading}
              text="Send"
            />
            </View>
          </View>
    </SafeAreaView>
    </View>
  );
};

export default Suggestion;
