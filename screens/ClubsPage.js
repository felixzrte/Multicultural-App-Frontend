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

const ClubsPage = ({route, navigation}) => {
  const {item} = route.params;

  return (
   <SafeAreaView>
       
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

export default ClubsPage;