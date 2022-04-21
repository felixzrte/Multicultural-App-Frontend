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
  useWindowDimensions,
  DevSettings
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {McIcon, McText, CustomButton} from '../components';
import moment from 'moment';
import {LinearGradient} from 'expo-linear-gradient';
import {BottomBarSection, Line} from '../constants/styles';
import RNRestart from 'react-native-restart';






const EventDetails = ({route, navigation}) => {


  const {item} = route.params;
  const startReload = ()=> DevSettings.reload()

  return (
    <View>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: -15,
            paddingHorizontal: 16,
          }}>
          <View>
            <McText body4 style={{opacity: 0.5, letterSpacing: 1.5}}>
              {item.club}
            </McText>
            <McText h2 style={{letterSpacing: 1.5}}>
              {item.eventName}
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
                {moment(item.date).format('DD, MMMM, Y | h:mm A')}
              </McText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image
                source={icons.maps}
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 8,
                  opacity: 0.65,
                }}
              />
              <McText body4 style={{opacity: 0.65, letterSpacing: 1.5}}>
                {item.location}
              </McText>
            </View>
            <McText h3 style={{marginTop: 16}}>
              About
            </McText>
            <McText body3 style={{marginTop: 8}}>
              {item.desc}
            </McText>
            <McText h3 style={{marginTop: 16}}>
              Extra Notes
            </McText>
            <McText style={{marginTop: 8}}>{item.extraNotes}</McText>
          </View>
        </View>
        <View style={{paddingBottom: '65%'}} />
        <View />
        {/* Buttons */}
      </ScrollView>
      <BottomBarSection>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: SIZES.width / 6,
              height: SIZES.width / 6,
              backgroundColor: COLORS.blue,
              marginLeft: 16,
              marginVertical: SIZES.base,
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.heart_outlined}
              resizeMode="contain"
              style={{
                width: SIZES.width,
                height: SIZES.width / 10,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              height: SIZES.width / 6,
              backgroundColor: COLORS.blue,
              marginHorizontal: 16,
              marginVertical: SIZES.base,
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <McText h3 color={'white'} style={{letterSpacing: 1.5}}>
              Sign Up For Event
            </McText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              height: SIZES.width / 6,
              backgroundColor: COLORS.blue,
              marginHorizontal: 16,
              marginVertical: SIZES.base,
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }} onPress={startReload} >
          <McText h3>Click to reload!</McText>
          </TouchableOpacity>
        </View>
      </BottomBarSection>
    </View>
  );
};

export default EventDetails;
