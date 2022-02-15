import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {DiscoverContainer, Line, SubHeader} from '../constants/styles';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';


const Asa = () => {

  return (
    <SafeAreaView>
    <ScrollView>
    <AppleHeader largeTitle="Asa" />
    <StatusBar />
    <ScrollView alignItems="center" horizontal={false} showsHorizontalScrollIndicator={false}>
          <ClubCard image={images.asa} />
    </ScrollView>

    </ScrollView>
    </SafeAreaView>
  );
};

export default Asa;