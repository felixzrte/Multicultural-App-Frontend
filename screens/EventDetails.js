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
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {McIcon, McText, CustomButton } from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../components/MerchProductStyles.js';
import moment from 'moment';
import { Container } from '../constants/styles';
import { Pencil } from '../assets/icons/Pencil.png';
import { up_arrow } from '../assets/icons/up_arrow.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const EventDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <ScrollView>
      <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>  
      <TouchableOpacity
             style={{
             borderRadius: '50/2',
             borderColor: "#000000",
             borderWidth: "0px",
             color: "#FFFF00",
              }}
            onPress={() => navigation.navigate('Home')}>
        <View style={styles.productItemContainer}>
          <Image
            source={{uri: item.image}}
            style={{
              height: ITEM_HEIGHT,
              width: ITEM_WIDTH,
              borderRadius: SIZES.radius,
            }}
          />
        </View>         
      </TouchableOpacity>   
      </View>
      <View style={{ backgroundcolor: 'black', marginLeft: '30%'}}>
      <TouchableOpacity
             style={{marginLeft: "70%",
             borderRadius: '50/2',
             borderColor: "#000000",
             borderWidth: "1px",
             justifyContent: "center",
             alignItems: "center",
             marginRight: "10%", 
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.Pencil}
            style={{
              height: 30,
              width: 30,
            }}
            />
      </TouchableOpacity>
      </View>
      <View style={{marginLeft: 10}}>
        <McText h2 color={COLORS.gray1}>
          {item.club}
        </McText>
        <McText h1>{item.eventName}</McText>
        <McText body3 color={COLORS.gray1}>
          {item.location}
        </McText>
        <McText body3 color={COLORS.gray1}>
          Starting {moment(item.time).format('hh:mm A')}
        </McText>

        <McText />
        <McText h3>About This Event</McText>
        <McText />
        <McText body3>{item.desc}</McText>
        <McText body3>{item.extraNotes}</McText>
      </View>
    </ScrollView>
  );
};

export default EventDetails;
