import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {DiscoverContainer, Line, SubHeader} from '../constants/styles';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText} from '../components';


/*

how about keeping a container around the body/text and having the background be gradient

add your own custom text and avatar to styles.js
to replace
McText
ClubCard
maybe Mctext body & h1
*/

const transition = () => {

  return (
    <View style={{ flex:1, marginBottom: 50}} space={5}> 
    <SafeAreaView>
    <ScrollView >
    <View flex="0" style={{ flex:1, marginLeft: 15, marginRight: 15, marginBottom:20}}>
    <McText h1 style={{marginBottom: 20, marginTop: 50, marginLeft:15}}>
         Thank you for your feedback!
    </McText>
    </View>
    <View alignItems="center" justifyContent="center" flex="0" style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop:20}}>
    <TouchableOpacity style={styles.button}>
        <Text>Continue</Text>
      </TouchableOpacity>
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
    borderRadius: 225 / 2,
    overflow: "hidden",
    borderWidth: .25,
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
export default transition;