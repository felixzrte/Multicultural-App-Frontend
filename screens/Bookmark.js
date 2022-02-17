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


const Bookmark = () => {

  return (
    <View style={{backgroundColor: "#0277bd"}}> 
    <SafeAreaView>
    <ScrollView >
    <View style={{backgroundColor: "white"}}>
    <View style={styles.header}>
    <McText h1 style={{ marginTop: "10%", marginLeft:"5%", marginBottom:"5%", color:"white"}}>
         Suggestions
    </McText>
    </View>
    </View>
    <View style={{backgroundColor:"white", marginBottom:"10%"}}>
      <View style={{marginTop:"50%", marginBottom:"10%",alignItems: 'center', justifyContent: 'center'}}>
      <SubHeader> Enter your Suggestion: </SubHeader>
      </View>
        <TextInput
        style={{borderRadius: 15, borderColor:"black", borderWidth: 0.5,marginLeft: "5%", marginRight:"5%", alignItems: "center", padding:"5%" }}
      />

    <View alignItems="center" justifyContent="center" style={{ width:"95%", marginLeft: "3%", marginRight: "10%", marginTop:"15%", marginBottom:"50%"}}>
    <TouchableOpacity style={styles.button}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#89CFF0",
    padding: "7%",
    borderRadius: 15,
    paddingHorizontal: "30%"

  },
  header: {
    borderColor: "black",
    borderWidth: .25,
    borderRadius: 25,
    borderTopRightRadius:0,
    borderTopLeftRadius:0,
    borderTopColor:"#0277bd",
    backgroundColor: "#0277bd"
  },
});
export default Bookmark;