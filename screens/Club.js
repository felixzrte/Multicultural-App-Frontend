/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Pressable,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Logo,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {McIcon, McText} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../components/MerchProductStyles.js';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Center } from 'native-base';
import useFetch from '../useFetch';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const Club = ({route, navigation}) => {
  const {item} = route.params;
  const {
    data: club,
    loading,
    error,
  } = useFetch('https://mcapp-api.herokuapp.com/api/v1/clubs');
  /*
    if (loading) {
      return null;
    }
  */
  if (error) {
    console.log(error);
  }
  
  console.log(club);

  return (
      <ScrollView>
        <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.productItemContainer}>
            <Image
              source={{uri: item.logoImage}} // it says name of image in club model
              style={{
                height: ITEM_HEIGHT,
                width: ITEM_WIDTH,
                borderRadius: SIZES.radius,
              }}
            />
            </View>
          </View>
      <View style={{ backgroundcolor: 'black', marginLeft: '30%'}}>
      <TouchableOpacity
             style={{marginLeft: "70%",
             borderRadius: '50/2',
             borderColor: "#000000",
             borderWidth: "1px",
             justifyContent: "center",
             alignItems: "center",
             marginRight: "10%", 
              }}
            onPress={() => navigation.navigate('UpdateClubs')}>
      <Image
            source={icons.Pencil}
            style={{
              height: 30,
              width: 30,
            }}
            />
      </TouchableOpacity>
      </View>
        <View style={{alignItems:'center'}}>
        <McText h1>{item.name}</McText>
        <McText></McText>
        <McText styles={styles.primaryColor} h2>About This Club</McText>
        <McText> </McText>
        <McText style={{marginLeft: 20, marginRight:10 }} body3> {item.missionStatement}</McText>
        <McText></McText>
        <McText style={styles.descText}> Instagram Page: @ {item.instagram}</McText>
        </View>
      </ScrollView>
  );
};



export default Club;
