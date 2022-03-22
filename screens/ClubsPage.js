import React from 'react';
import {
  View,
  // Pressable,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {McIcon, McText} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const ClubsPage = ({route, navigation}) => {
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
        <McText h1>{item.club}</McText>
        <McText h1>{item.eventName}</McText>
        <McText />
        <McText h2>About This Event</McText>
        <McText />
        <McText style={styles.descText}>{item.desc}</McText>
        <McText />
        <McText style={styles.descText}>{item.date}</McText>
        <McText style={styles.descText}>{item.location}</McText>
        <McText style={styles.descText}>{item.attendence}</McText>
        <McText style={styles.descText}>{item.favorite}</McText>
        <McText style={styles.bottomText}>
          {' '}
          Extra Notes: {item.extraNotes}
        </McText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4C9A2A',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  heading: {
    fontWeight: 'bold',
    color: 'white',
  },
  eventdetails: {
    backgroundColor: '#18191A',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
});

export default ClubsPage;
