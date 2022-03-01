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

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const Product = ({route, navigation}) => {
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

export default Product;
