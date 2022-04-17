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
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {McIcon, McText, CustomButton} from '../components';
import moment from 'moment';

const EventDetails = ({route, navigation}) => {
  const {item} = route.params;

  var inputDate = 'item.date';

  var outputDate = moment(inputDate).format('dddd, MMM DD at HH:mm a');

  console.log(outputDate);

  return (
    <ScrollView>
      {/* Event Poster Section */}
      <View>
        <ImageBackground
          source={{uri: item.image}}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            height: SIZES.width + 60,
            width: SIZES.width,
          }}
        />
        {/* Color Overlay */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            height: SIZES.width + 60,
            backgroundColor: 'black',
            opacity: 0.8,
          }}
        />
        {/* Navigation Header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: '15%',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{marginLeft: SIZES.base}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.left_arrow}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <McText h3 color={'white'}>
              Event Detail
            </McText>
          </View>
          <TouchableOpacity
            style={{marginRight: SIZES.base}}
            onPress={() => navigation.navigate('UpdateEvents')}>
            <Image
              source={icons.side_drawer}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Event Poster */}
        <View style={{paddingTop: SIZES.padding, alignItems: 'center'}}>
          <Image
            source={{uri: item.image}}
            resizeMode="contain"
            style={{
              width: SIZES.width,
              height: SIZES.width / 1.2,
            }}
          />
        </View>
      </View>
      {/* Description */}
      <View />
      {/* Buttons */}
      <View />
    </ScrollView>
  );
};

export default EventDetails;
