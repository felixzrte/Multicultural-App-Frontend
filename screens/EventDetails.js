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
          <View style={styles.eventItemContainer}>
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
        <McText h1 style={styles.heading}>{item.eventName}</McText>
        <McText></McText>
        <McText h2 style={styles.heading}>About This Event</McText>
        <McText></McText>
        <McText style={styles.descText}> Description: {item.desc}</McText>
        <McText></McText>
        <McText style={styles.descText} > Date and Time: {item.date}</McText>
        <McText style={styles.descText} > Location: {item.location}</McText>
        <McText style={styles.descText} > Attendence: {item.attendence}</McText>
        <McText style={styles.descText} > Favorite: {item.favorite}</McText>
        <McText style={styles.bottomText}> Extra Notes: {item.extraNotes}</McText>
        </View>
      </ScrollView>
  );
};

export default EventDetails;
