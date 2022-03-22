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
import styles from '../components/EventDetailsStyles.js';

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const EventDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
      <ScrollView>
        <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.productItemContainer}>
            <Image
              source={{uri: item.image}} 
              style={{
                height: ITEM_HEIGHT,
                width: ITEM_WIDTH,
                borderRadius: SIZES.radius,
              }}
            />
            </View>
          </View>
        <View style={styles.leftMargin}>
        <McText h1>Club: {item.club}</McText>
        <McText></McText>
        <McText h1>{item.eventName}</McText>
        <McText></McText>
        <McText h2>About This Event</McText>
        <McText></McText>
        <View style={styles.flatlistcontainer}>
           <McText style={styles.descText}> Description: {item.desc}</McText>
        </View>
        <View style={styles.flatlistcontainer}> 
        <McText style={styles.dText} > Date and Time: {item.date}</McText>
        </View>
        <View style={styles.flatlistcontainer}>
        <McText style={styles.dText} > Location: {item.location}</McText>
        </View>
        <View style={styles.flatlistcontainer}>
        <McText style={styles.dText} > Attendence: {item.attendence}</McText>
        </View>
        <View style={styles.flatlistcontainer}>
        <McText style={styles.dText} > Favorite: {item.favorite}</McText>
        </View>
        <View style={styles.flatlistcontainer}>
        <McText style={styles.bottomText}> Extra Notes: {item.extraNotes}</McText>
        </View>
        </View>
      </ScrollView>
  );
};

export default EventDetails;
