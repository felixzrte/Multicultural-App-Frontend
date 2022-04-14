import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {DiscoverContainer, Line, SubHeader} from '../constants/styles';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText} from '../components';




const Place = () => {

  return (
    <View style={{backgroundColor: "#0277bd"}}> 
    <SafeAreaView>
    <ScrollView >
    <McText h1 style={{marginBottom: "5%", marginTop: "10%", marginLeft:"5%", color:"white"}}>
         Maps
    </McText>
    </ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
container:{
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 10,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
  },
image2: {
    width: 200,
    height: 200,
    borderRadius: 225 / 2,
    overflow: "hidden",
    borderWidth: 0,
    borderColor: "black",
    alignItems: "center",
    marginLeft: "25%",
    marginBottom: "10%",
  }
});
export default Place;
