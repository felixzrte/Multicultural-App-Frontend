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

const Asa = () => {

  return (
    <View style={{backgroundColor: "#0277bd"}}> 
    <SafeAreaView>
    <ScrollView >
    <View style={{ marginLeft: "5%", marginRight:"5%", marginBottom:"5%"}}>
    <McText h1 style={{marginBottom: "5%", marginTop: "10%", marginLeft:"5%", color:"white"}}>
         Asian Student Association (ASA)
    </McText>
    </View>

    <Image
        backgroundColor="white"
        style={styles.image2}
        source={images.asa}
      />

    <View style={styles.container}>
    <SubHeader style={{marginTop:"5%"}}> Description </SubHeader>
    <View alignItems="center" justifyContent="center" style={{  flex: 1, marginLeft: "5%", marginRight: "5%", marginBottom:"5%"}}>
    <McText body3 > 
    Asian Student Association strives to convey to the greater Messiah University community
    what it is like to live in America as an Asian, Asian-American (citizens of America), 
    Asian-American (multi-ethnic background) and adopted Asians. In addition, Asian Student
    Association is a safe place where students can come for discussions, a place that represents
    and stands for racial minorities and a place where proper representation of Asian groups are ensured.
    </McText>
    </View>
    <SubHeader> Mission Statement </SubHeader>
    <View alignItems="center" justifyContent="center" style={{  marginLeft: "5%", marginRight: "5%"}}>
    <McText body3 style={{marginBottom: "5%"}}> 
    "Our mission is to equip diverse leaders on campus to empower them into agents of change, while
     amplifying underrepresented student athletes and celebrating cultural differences."
    </McText>
    </View>
    <SubHeader> Contact Info </SubHeader>
    <View  style={{  marginLeft: "5%", marginRight: "5%"}}>
    <McText body3 style={{marginBottom: "20%"}}> 
    For more information, please contact asa@messiah.edu. 
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
export default Asa;