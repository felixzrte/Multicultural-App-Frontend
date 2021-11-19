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

const Home = ({navigation}) => {
  const {
    data: events,
    loading,
    error,
  } = useFetch('https://mcapp-api.herokuapp.com/api/v1/events');
  /*
    if (loading) {
      return null;
    }
  */
  if (error) {
    console.log(error);
  }
  console.log(events);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const eventCard = ({item, index}) => {
    const inputRange = [
      (index - 1) * SIZES.itemSize,
      index * SIZES.itemSize,
      (index + 1) * SIZES.itemSize,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.4, 1, 0.4],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
    });
    return (
      <Animated.View
        style={[
          {
            width: SIZES.itemSize,
            justifyContent: 'center',
            alignItems: 'center',
            opacity,
            transform: [{scale}],
          },
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => console.log('Clicked')}>
          <Image
            source={images.beach}
            style={{
              height: 350,
              width: SIZES.cardWidth,
              borderRadius: SIZES.radius,
            }}
          />
        </TouchableOpacity>
        <View>
          <McText body2>{item.eventName}</McText>
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <McText body4 style={{opacity: 0.5}}>
            NOVEMBER 21, 9:10 PM
          </McText>
          <McText h1>EXPLORE</McText>
        </View>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBarItems}>
            <McIcon source={icons.search} size={24} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={COLORS.gray1}
              style={{
                ...FONTS.h4,
                color: COLORS.white,
                width: '82%',
                marginBottom: 5,
              }}
            />
            <McIcon source={icons.filter} size={24} />
          </View>
        </View>
        {/* Announcements */}
        <View style={styles.announcementsHeader}>
          <McText h2>ANNOUNCEMENTS</McText>
        </View>
        {/* Events */}
        <View style={styles.eventHeader}>
          <McText h2>EVENTS</McText>
        </View>
        <View>
          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            contentContainerStyle={{paddingHorizontal: SIZES.itemSpacing}}
            style={{flexGrow: 0}}
            snapToInterval={SIZES.itemSize}
            decelerationRate="fast"
            data={events.events}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={eventCard}
          />
        </View>
        <View style={{paddingBottom: 150}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  /* Header */
  headerContainer: {
    padding: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* Search Bar */
  searchBarContainer: {
    marginHorizontal: SIZES.padding,
    height: 50,
    backgroundColor: COLORS.input,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
  },
  searchBarItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 9,
    marginRight: 15,
  },
  /* Events */
  eventHeader: {
    marginHorizontal: SIZES.padding,
    margin: 20,
    alignItems: 'center',
  },
  /* Announcements */
  announcementsHeader: {
    marginHorizontal: SIZES.padding,
    margin: 20,
    alignItems: 'center',
  },
});

export default Home;
