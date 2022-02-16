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

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const Product = ({route, navigation}) => {
  const {item} = route.params;

  return (
      <ScrollView>
        <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
              <View style={styles.itemContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#d3d3d3',
    marginBottom: 10,
    borderRadius: 40,
    borderTopRightRadius:0,
    borderTopLeftRadius:0,
  },
  leftMargin: {
    marginLeft: 25,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4C9A2A',
  },
  descText: {
    fontSize: 14,
    letterSpacing: 0,
    color: 'black',
  },
  bottomText: {
    fontSize: 14,
    letterSpacing: 0,
    color: 'black',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  heading: {
    fontWeight: 'bold',
    color: 'white',
  },
  tinyLogo: {
    width: 350,
    height: 200,
  },
});

export default Product;
