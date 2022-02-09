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
  var base64Icon = 'data:image/jpeg;base64,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';
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
              source={{uri: base64Icon}}
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
