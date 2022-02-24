import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {DiscoverContainer, Line, SubHeader} from '../constants/styles';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText} from '../components';

const Transition = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              marginLeft: '10%',
              marginRight: '10%',
              marginTop: '50%',
            }}>
            <McText h1 style={{marginTop: '20%', marginLeft: '10%'}}>
              Thank you for your feedback!
            </McText>
          </View>
          <View
            style={{marginLeft: '15%', marginRight: '15%', marginTop: '10%'}}>
            <TouchableOpacity style={styles.button}>
              <Text>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#89CFF0',
    padding: '10%',
    borderRadius: 15,
    paddingHorizontal: '10%',
  },
});
export default Transition;
