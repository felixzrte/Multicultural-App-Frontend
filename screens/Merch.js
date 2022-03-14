/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  ImageBackground,
  Image,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import styled from 'styled-components/native';
import {McIcon, McText} from '../components';
import useFetch from '../useFetch';
import {ceil} from 'react-native-reanimated';
import styles from '../components/MerchProductStyles';

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = SIZES.width * .8;
const ITEM_HEIGHT = ITEM_WIDTH;
const VISIBLE_ITEMS = 3;
const ITEM_SIZE = SIZES.width * .9;
const ITEM_SPACING = (SIZES.width - ITEM_SIZE) /2;

  const Merch = ({navigation}) => {
  const {
    data: merchs,
    loading,
    error,
  } = useFetch('https://mcapp-api.herokuapp.com/api/v1/merchs');
  /*
    if (loading) {
      return null;
    }
  */
  if (error) {
    console.log(error);
  }
  console.log(merchs);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  
  
  const merchCard = ({item, index}) => {
    const inputRange = [
      (index - 1) * SIZES.itemSize,
      index * SIZES.itemSize,
      (index + 1) * SIZES.itemSize,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [1, 1, 1],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [1, 1, 1],
    });

    return (
      <View style={styles.merchItemContainer}>
      <Animated.View style={{opacity, transform: [{scale}]}}>
          <View>
            <McText></McText>
          </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              navigation.navigate('Product', {
                item: item,
              })
            }>
            <Image
              source={{uri: item.pic}}
              style={{
                height: ITEM_HEIGHT,
                width: ITEM_WIDTH,
                borderRadius: SIZES.radius,
              }}
            />
            <View style={styles.headerContainer}><McText h1 numberOfLines={1}>{item.merchItemName}</McText></View>
            <View style={styles.headerContainer}><McText body2 numberOfLines={1}>${item.merchItemPrice}</McText></View>
          </TouchableOpacity>
        </View>
      </Animated.View>
      </View>
    );
  };

  
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <McText body4>Merch</McText>
      </View>
      <View style={styles.pleaseCenter}>
      <Animated.FlatList
        data={merchs.merchs}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={merchCard}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        bounces={true}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        style={{flexGrow: 1}}
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
      />
      </View>
    </SafeAreaView>
  );
};

export default Merch;
