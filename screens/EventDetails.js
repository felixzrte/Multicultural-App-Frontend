/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Pressable,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {McIcon, McText} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';

const EventDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <McText h1 style={{marginBottom: 20}}>
            Event Details
          </McText>
          <View
            style={styles.eventdetails}
            paddingVertical={50}
            paddingHorizontal={100}>
            <McText h2 style={{marginBottom: 10}}>
              {item.eventName}
            </McText>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg',
              }}
            />
            <McText body2 style={{marginTop: 20}}>
              Club: {item.clubName}
            </McText>
            <McText body3> Synopsis: </McText>
            <McText body4> {item.desc}</McText>
          </View>
          <View
            style={styles.eventdetails}
            paddingVertical={50}
            paddingHorizontal={138}>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Signup</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default EventDetails;
