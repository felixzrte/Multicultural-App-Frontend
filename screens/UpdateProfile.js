/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { LinearGradient } from 'react-native-svg';
import Profile from './Profile';

const UpdateProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
         <View style={styles.profileImage}>
            <Image
              source={require('../assets/images/mcc.png')}
              style={styles.image}
              resizeMode="center"
            />
           
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  

  text: {
    fontFamily: 'HelveticaNeue',
    color: 'white',
    fontWeight: '400',
    fontSize: 40,
  },
  userInfoSection:{
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  caption: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  
});
export default UpdateProfile;
