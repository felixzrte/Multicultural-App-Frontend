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

const Lal = () => {

  return (
    <View style={{backgroundColor: "#0277bd"}}> 
    <SafeAreaView>
    <ScrollView >
    <View style={{ marginLeft: "5%", marginRight:"5%", marginBottom:"5%"}}>
    <McText h1 style={{marginBottom: "5%", marginTop: "10%", marginLeft:"5%", color:"white"}}>
         La Allianca Latina (LAL)
    </McText>
    </View>

    <Image
        backgroundColor="white"
        style={styles.image2}
        source={images.lal}
      />

    <View style={styles.container}>
    <SubHeader style={{marginTop:"5%"}}> Description </SubHeader>
    <View alignItems="center" justifyContent="center" style={{  flex: 1, marginLeft: "5%", marginRight: "5%", marginBottom:"5%"}}>
    <McText body3 > 
    La Alianza Latina (LAL) initiates conversations about issues affecting
    the Latino/Hispanic community. Collaborating with different groups and
    making connections points. Being a community and a place for all the
    Hispanic/Latino students on campus. Getting the majority to care, not]
    just about LAL but also all the other Multicultural clubs. Creating 
    friendship and connections to other students, professors, administration, etc.


    </McText>
    </View>
    <SubHeader> Mission Statement </SubHeader>
    <View alignItems="center" justifyContent="center" style={{  marginLeft: "5%", marginRight: "5%"}}>
    <McText body3 style={{marginBottom: "5%"}}> 
    "La Alianza Hispana's mission is to empower individuals
     and strengthen the Latino community by leveraging internal
     and external partnerships to provide high quality social,
     educational, and public health services and resources."
    </McText>
    </View>
    <SubHeader> Contact Info </SubHeader>
    <View  style={{  marginLeft: "5%", marginRight: "5%"}}>
    <McText body3 style={{marginBottom: "20%"}}> 
    For more information, please contact: laalianzalatina@messiah.edu.
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
export default Lal;