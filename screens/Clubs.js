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
import styles from '../components/ClubsStyles';

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = SIZES.width * .8;
const ITEM_HEIGHT = ITEM_WIDTH;
const VISIBLE_ITEMS = 3;
const ITEM_SIZE = SIZES.width * .9;
const ITEM_SPACING = (SIZES.width - ITEM_SIZE) /2;


const Clubs = ({navigation}) => {
    const {
      data: clubs,
      loading,
      error,
    } = useFetch('https://mcapp-api.herokuapp.com/api/v1/clubs');

    if (error) {
        console.log(error);
      }
      console.log(clubs);
    
      const scrollX = React.useRef(new Animated.Value(0)).current;

      if(item.deletedStatus == false)

        return (
             <View style={{backgroundColor: "#0277bd"}}> 
           <SafeAreaView>
            <ScrollView >
            <McText h1 style={{marginBottom: "5%", marginTop: "10%", marginLeft:"5%", color:"white"}}>
               Clubs
            </McText>
            </ScrollView>
           </SafeAreaView>
              </View>
  );
};


export default Clubs;