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
    <View style={{backgroundColor: "#0277bd", flex:1, marginBottom: 50}} space={5}> 
    <SafeAreaView>
    <ScrollView >
    <View flex="0" style={{ flex:1, marginLeft: 15, marginRight: 15, marginBottom:20}}>
    <McText h1 style={{marginBottom: 20, marginTop: 20, marginLeft:15}}>
         Multi-Cultural Council (MCC)
    </McText>
    </View>
    <View style={{ marginBottom: 15, marginTop: 15, marginLeft:10}}>
    <Image
        backgroundColor="white"
        style={styles.image2}
        source={images.mcc}
      />
      </View>

    <View style={{ backgroundColor: "white", borderWidth: 0, borderRadius: 10}}>
    <SubHeader style={{marginTop:20}}> Description </SubHeader>
    <View alignItems="center" justifyContent="center" flex="0" style={{  flex: 1, marginLeft: 15, marginRight: 15, marginBottom:20}}>
    <McText body3 > 
    Student organizations whose missions are tied
    to the work of Multicultural Programs (MP) through their focus
    on racial, ethnic, and cultural celebration and reconciliation
    gather together to form a common Multicultural Council under the
    support and advisement of both MP and Student Government Association. 
    </McText>
    </View>
    <SubHeader> Mission Statement </SubHeader>
    <View alignItems="center" justifyContent="center" flex="0" style={{ flex: 1, marginLeft: 15, marginRight: 15}}>
    <McText body3 style={{marginBottom: 20}}> 
    "It is the mission of the Messiah University Multicultural Council
    to serve the entire student body through our efforts to improve campus
    life for all ethnic minority students. We seek to bring unification
    amongst our organizations and knowledge of our cultures to the Messiah
    University Community. In all things we will uplift Jesus as the head of
    our council and the Body of Christ. We pursue love. We embrace unity. We
    uphold the value of our understanding and our differences."
    </McText>
    </View>
    <SubHeader> Contact Info </SubHeader>
    <View  flex="0" style={{ flex: 1, }}>
    <McText body3 style={{marginBottom: 20, marginLeft: 20, marginRight: 20}}> 
    For more information, please contact: multiculturalcouncil@messiah.edu.
    </McText>
    </View>
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
  }
});
export default Asa;