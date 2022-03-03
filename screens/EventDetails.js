/* eslint-disable react-native/no-inline-styles */
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
import styles from '../components/EventDetailsStyles';

const EventDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <ScrollView>
    <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.productItemContainer}>
        <Image
          source={{uri: item.pic}}
          style={{
            height: ITEM_HEIGHT,
            width: ITEM_WIDTH,
            borderRadius: SIZES.radius,
          }}
        />
        </View>
        </View>
        <View style={styles.leftMargin}>
        <McText h1>{item.merchItemName}</McText>
        <McText></McText>
        <McText h2>${item.merchItemPrice}</McText>
        <McText></McText>
        <McText h2>About This Product</McText>
        <McText></McText>
        <McText style={styles.descText}>{item.description}</McText>
        <McText></McText>
        <McText h2>Contact to Purchase</McText>
        <McText style={styles.descText}>Email: {item.contactEmail}</McText>
        <McText style={styles.descText}>Phone Number: {item.contactNumber}</McText>
        <McText></McText>
        <McText h2>Number of Items in Stock</McText>
        <McText style={styles.descText}>Small: {item.numSmall}</McText>
        <McText style={styles.descText}>Medium: {item.numMedium}</McText>
        <McText style={styles.bottomText}>Large: {item.numLarge}</McText>
        </View>
     
    
  </ScrollView>
  );
};


export default EventDetails;
/* 
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

*/