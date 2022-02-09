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
import {EvilIcons} from '@expo/vector-icons';

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = SIZES.width * .9;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;
const ITEM_SIZE = SIZES.width * 1;
const ITEM_SPACING = (SIZES.width - ITEM_SIZE) / 2;

//var base64Icon = 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg';
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
      <Animated.View style={{opacity, transform: [{scale}]}}>
        <View style={styles.itemContainer}>
          <McText style={[styles.title]} numberOfLines={1}>
            {item.merchItemName}
          </McText>
          <View style={styles.itemContainerRow}>
            <McText style={[styles.location]}>
              <EvilIcons
                name="location"
                size={16}
                color="white"
                style={{marginRight: 5}}
              />
            </McText>
            {/* <McText style={[styles.date]}>{item.date}</McText> */}
          </View>
        </View>
        <View
          style={{
            width: ITEM_SIZE,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              navigation.navigate('EventDetails', {
                item: item,
              })
            }>
            <Image
              source={{uri: 'data:image/jpeg;base64,' + item.pic}}
              style={{
                height: ITEM_HEIGHT,
                width: ITEM_WIDTH,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <McText body4>Merch</McText>
      </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
    marginBottom: 25,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
  /* Header */
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Merch;
