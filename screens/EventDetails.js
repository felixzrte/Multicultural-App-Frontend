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
import {Container} from '../constants/styles';
import styles from '../components/EventDetailsStyles.js';
import moment from 'moment';
//import pencil from '../constants/images.js';

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const EventDetails = ({route, navigation}) => {
  const {item} = route.params;

  var inputDate = 'item.date';

  var outputDate = moment(inputDate).format('dddd, MMM DD at HH:mm a');

  console.log(outputDate);

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
        <McText h1 style={styles.heading}>
          {item.eventName}
        </McText>
        <McText />
        <McText h2 style={styles.heading}>
          About This Event
        </McText>
        <McText />
        <McText style={styles.descText}> Description: {item.desc}</McText>
        <McText />
        <McText style={styles.descText}> Date and Time: {item.date}</McText>
        <McText style={styles.descText}> Location: {item.location}</McText>
        <McText style={styles.descText}> Attendence: {item.attendence}</McText>
        <McText style={styles.descText}> Favorite: {item.favorite}</McText>
        <McText style={styles.bottomText}>
          {' '}
          Extra Notes: {item.extraNotes}
        </McText>
      </View>
      <View style={{marginLeft: 10}}>
        <McText h2 color={COLORS.gray1}>
          {item.club}
        </McText>
        <McText h1>{item.eventName}</McText>
        <McText body3 color={COLORS.gray1}>
          {item.location}
        </McText>
        <McText body3 color={COLORS.gray1}>
          Starting {moment(item.time).format('hh:mm A')}
        </McText>

        <McText />
        <McText h3>About This Event</McText>
        <McText />
        <McText body3>{item.desc}</McText>
        <McText body3>{item.extraNotes}</McText>
      </View>
    </ScrollView>
  );
};

export default EventDetails;
