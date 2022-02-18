import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
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

const Isa = () => {

  return (
    <View style={{backgroundColor: "#b81667"}}> 
    <SafeAreaView>
    <ScrollView >
    <View style={{ marginLeft: "5%", marginRight:"5%", marginBottom:"5%"}}>
    <McText h1 style={{marginBottom: "5%", marginTop: "10%", marginLeft:"5%", color:"white"}}>
         ISA/MuKappa (International Student Association/Missionary Kids)(ISA)
    </McText>
    </View>

    <Image
        backgroundColor="white"
        style={styles.image2}
        source={images.isa}
      />

    <View style={styles.container}>
    <SubHeader style={{marginTop:"5%"}}> Description </SubHeader>
    <View alignItems="center" justifyContent="center" style={{  flex: 1, marginLeft: "5%", marginRight: "5%", marginBottom:"5%"}}>
    <McText body3 > 
    ISA/MuKappa exists to welcome and support international, 
    missionary and third culture kids. Through fostering 
    relationships and educating the greater student body,
    we hope to aid in the development of international/MK/TCK
    students at Messiah University.


    </McText>
    </View>
    <SubHeader> Mission Statement </SubHeader>
    <View alignItems="center" justifyContent="center" style={{  marginLeft: "3.83958%", marginRight: "6%"}}>
    <McText body3 style={{marginBottom: "5%"}}> 
    "ISA/MuKappa serves as a main support system for international students and missionary kids,
     providing them with a home away from home. The organization consists of international students
     and faculty, missionary kids and American students interested in other nations and cultures."
    </McText>
    </View>
    <SubHeader> Contact Info </SubHeader>
    <View  style={{  marginLeft: "5%", marginRight: "5%"}}>
    <McText body3 style={{marginBottom: "20%"}}> 
    For more information, please contact: isamukappa@messiah.edu.
    </McText>
    </View>
    </View>
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

export default Isa;