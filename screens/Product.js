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

const ITEM_WIDTH = SIZES.width * .9;
const ITEM_HEIGHT = ITEM_WIDTH * .7;

const Product = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <McText h1 style={{marginBottom: 30}}></McText>
          <View
            style={styles.product}
            paddingVertical={50}
            paddingHorizontal={100}>
            <Image
              source={{uri: item.pic}}
              style={{
                height: ITEM_HEIGHT,
                width: ITEM_WIDTH,
                borderRadius: SIZES.radius,
              }}
            />
            <McText h2 style={{marginBottom: 0}}>{item.merchItemName}</McText>
            <McText body2 style={{marginTop: 0}}>Price: {item.merchItemPrice}</McText>
            <McText body3> Email: {item.contactEmail}</McText>
          </View>
          <View
            style={styles.product}
            paddingVertical={50}
            paddingHorizontal={138}>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Purchase</Text>
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
  tinyLogo: {
    width: 350,
    height: 200,
  },
});

export default Product;
