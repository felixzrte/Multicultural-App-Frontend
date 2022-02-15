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
*/

const Asa = () => {

  return (
    <SafeAreaView>
    <ScrollView>
    <AppleHeader largeTitle="Asa" alignItems="center"/>
    <ClubCard image={images.asa} />
    <McText alignItem="center" h1 style={{marginBottom: 20}}>
            Asa
    </McText>
    <View alignItems="center">
    <SubHeader> Description </SubHeader>
    <McText body3> 
    Student organizations whose missions are tied
    to the work of Multicultural Programs (MP) through their focus
    on racial, ethnic, and cultural celebration and reconciliation
    gather together to form a common Multicultural Council under the
    support and advisement of both MP and Student Government Association. 
    </McText>
    </View>
    <View alignItems="center">
    <SubHeader> Mission Statement </SubHeader>
    <McText body3> 
    "It is the mission of the Messiah University Multicultural Council
    to serve the entire student body through our efforts to improve campus
    life for all ethnic minority students. We seek to bring unification
    amongst our organizations and knowledge of our cultures to the Messiah
    University Community. In all things we will uplift Jesus as the head of
    our council and the Body of Christ. We pursue love. We embrace unity. We
    uphold the value of our understanding and our differences."
    </McText>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Asa;