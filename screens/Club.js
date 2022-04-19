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
import {LinearGradient} from 'expo-linear-gradient';
import {BottomBarSection, Line} from '../constants/styles';

const Club = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View>
      <ScrollView>
        {/* Navigation Header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 65,
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
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <McText h3 color={'black'}>
              Multicultural Clubs
            </McText>
          </View>
          <TouchableOpacity
            style={{marginRight: SIZES.base}}
            onPress={() => navigation.navigate('UpdateClubs')}>
            <Image
              source={icons.menu_dots}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.black,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Club Logo */}
        <ImageBackground
          resizeMode="contain"
          source={{uri: item.logoImage}}
          style={{
            marginTop: 24,
            width: SIZES.width,
            height: SIZES.height / 2.5,
          }}
        />
        {/* Description */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
            paddingHorizontal: 16,
          }}>
          <View>
            <McText body3 style={{opacity: 0.5, letterSpacing: 1.5}}>
              {item.acronym}
            </McText>
            <McText h2 style={{letterSpacing: 1.5}}>
              {item.name}
            </McText>
            <McText
              body3
              style={{opacity: 0.8, letterSpacing: 1.5, marginVertical: 12}}>
              {item.bio}
            </McText>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image
                source={icons.clock}
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 8,
                  opacity: 0.65,
                }}
              />
              <McText body4 style={{opacity: 0.65, letterSpacing: 1.5}}>
                {item.meetingDays} | {item.meetingTimes}
              </McText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image
                source={icons.insta}
                style={{
                  width: 14,
                  height: 14,
                  marginRight: 8,
                  opacity: 0.65,
                }}
              />
              <McText body3 style={{opacity: 0.65, letterSpacing: 1.5}}>
                {item.instagram}
              </McText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image
                source={icons.email}
                style={{
                  width: 14,
                  height: 14,
                  marginRight: 8,
                  opacity: 0.65,
                }}
              />
              <McText body3 style={{opacity: 0.65, letterSpacing: 1.5}}>
                {item.email}
              </McText>
            </View>
            <McText h3 style={{marginTop: 16}}>
              Mission
            </McText>
            <McText body3 style={{marginTop: 8}}>
              {item.missionStatement}
            </McText>
          </View>
        </View>
        <View style={{paddingBottom: '20%'}} />
        <View />
      </ScrollView>
    </View>
  );
};

export default Club;
