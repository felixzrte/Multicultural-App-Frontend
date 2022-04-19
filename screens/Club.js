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
        <View>
          <ImageBackground
            source={{uri: item.logoImage}}
            resizeMode="cover"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              height: SIZES.width,
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
              opacity: 0.1,
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
                source={icons.menu_dots}
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
              source={{uri: item.logoImage}}
              resizeMode="contain"
              style={{
                width: SIZES.width,
                height: SIZES.width / 1.2,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Club;
