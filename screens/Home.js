/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {DiscoverContainer, Line, SubHeader} from '../constants/styles';
import useFetch from '../useFetch';
import AppleHeader from 'react-native-apple-header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native-gesture-handler';
import ClubCard from '../components/ClubCard';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

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
    <SafeAreaView>
      <ScrollView>
        <AppleHeader largeTitle="Discover" />
        <DiscoverContainer>
          <StatusBar />
          <Line />
        </DiscoverContainer>
        <SubHeader>Clubs</SubHeader>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ClubCard image={images.asa} />
          <ClubCard image={images.asu} />
          <ClubCard image={images.bsu} />
          <ClubCard image={images.csa} />
          <ClubCard image={images.isa} />
          <ClubCard image={images.lal} />
          <ClubCard image={images.mcc} />
        </ScrollView>
        <SubHeader>Events</SubHeader>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
