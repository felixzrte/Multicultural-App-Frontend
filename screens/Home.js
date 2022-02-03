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
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import styled from 'styled-components/native';
import {McIcon, McText} from '../components';
import useFetch from '../useFetch';
import AppleHeader from 'react-native-apple-header';

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

  return (
    <View>
      <AppleHeader largeTitle="Discover" />
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
