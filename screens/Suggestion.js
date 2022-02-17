import React from 'react';
import {View, StyleSheet, Image, Text, Button, Alert, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText, CustomButton} from '../components';
import {
  StyledContainer,
  Logo,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledTextInput,
  ButtonText,
  StyledButton,
  StyledInputLabel,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
  InnerContainer,
  SubHeader,
} from '../constants/styles';


/*

how about keeping a container around the body/text and having the background be gradient

add your own custom text and avatar to styles.js
to replace
McText
ClubCard
maybe Mctext body & h1
*/

const Suggestions = () => {

  return (
    <View style={{ backgroundColor: "white", flex:1, marginBottom: 50}} space={5}> 
    <SafeAreaView>
    <ScrollView >
    <View flex="0" style={{ flex:1, borderColor:"black", borderWidth: 0.5, borderRadius: 20, marginBottom:20}}>
    <McText h1 style={{marginBottom: 20, marginTop: 20, marginLeft:15, marginTop: 20}}>
         Suggestions
    </McText>
    </View>
        <SubHeader> Enter your Suggestion: </SubHeader>
        <TextInput
        style={{borderRadius: 15, borderColor:"black", borderWidth: 0.5, flex:5,marginLeft: 15, marginRight: 15, alignItems: "center", alignContent: "center"}}
      />

    <View alignItems="center" justifyContent="center" flex="0" style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop:20}}>
    <TouchableOpacity style={styles.button}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
    <View>
    </View>
    </ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
image2: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center",
    marginLeft: 225/2,
    marginBottom: 150/5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#89CFF0",
    padding: 20,
    borderRadius: 15,

  },
});
export default Suggestions;