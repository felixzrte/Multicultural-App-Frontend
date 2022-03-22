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

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const ClubsPage = ({route, navigation}) => {
  const {item} = route.params;

  return (
      <ScrollView>
        <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.productItemContainer}>
            <Image
              source={{uri: item.image}} // it says name of image in club model
              style={{
                height: ITEM_HEIGHT,
                width: ITEM_WIDTH,
                borderRadius: SIZES.radius,
              }}
            />
            </View>
          </View>
        <View style={{alignItems:'center'}}>
        <McText h1>{item.name}</McText>
        <McText></McText>
        <McText styles={styles.primaryColor} h2>About This Club</McText>
        <McText> </McText>
        <View style={{alignItems:'center'}}>
        <McText style={styles.descText}> Mission Statement: Our goal is to bring the world to you guys on campus. </McText></View>
        <McText></McText>
        </View>
      </ScrollView>
  );
};

export default ClubsPage;
