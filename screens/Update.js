import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText, CustomButton} from '../components';
import {SubHeader} from '../constants/styles';
import styles from '../components/SuggestionStyles.js';




const Update = () => {

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
              alignItems="center"
              justifyContent="center"
              style={{
                width: '95%',
                marginLeft: '3%',
                marginRight: '10%',
                marginTop: '15%',
                marginBottom: '60%',
              }}>
              <TouchableOpacity style={styles.button}>
                <Text>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
    </SafeAreaView>
    </View>
  );
};


export default Update;
