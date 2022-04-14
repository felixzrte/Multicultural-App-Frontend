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
import styles from '../components/MerchProductStyles';
import {HeaderSection, Line, Container} from '../constants/styles';
const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = SIZES.width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH;
const VISIBLE_ITEMS = 3;
const ITEM_SIZE = SIZES.width * 0.9;
const ITEM_SPACING = (SIZES.width - ITEM_SIZE) / 2;

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

  const merchCard = ({item, index}) => {
    return (
      <View style={styles.merchItemContainer}>
        <View>
          <View>
            <McText />
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
              <View style={styles.headerContainer}>
                <McText h1 numberOfLines={1}>
                  {item.merchItemName}
                </McText>
              </View>
              <View style={styles.headerContainer}>
                <McText body2 color={COLORS.gray1} numberOfLines={1}>
                  ${item.merchItemPrice}
                </McText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <ScrollView>
        {/* Header Section */}
        <HeaderSection>
          <McText h1>Merch</McText>
          <View style={{flexDirection:'row'}}>
            <McText style={{marginTop: 10, textAlign:'left'}} body4 color="gray">Explore all the different club merchandise!</McText>
            
            <McText onPress={() => navigation.navigate('AddMerch')} style={{marginTop: 0, textAlign:'right', position: 'absolute', right: 0}} h1 color="gray">+</McText>
            
          </View>
          <Line />
        </HeaderSection>
        <View style={{marginTop: 60}}>
          <FlatList
            data={merchs.merchs}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={merchCard}
            decelerationRate="fast"
            contentContainerStyle={{
              paddingHorizontal: ITEM_SPACING,
            }}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Merch;
