/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const width = Dimensions.get('screen').width;

const Details = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <ScrollView
      showVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: colors.white,
        paddingBottom: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground
        style={styles.headerImage}
        source={require('../assets/images/mcc.png')}>
        <View style={styles.header}>
          <Feather
            name="chevron-left"
            size={28}
            color={colors.white}
            onPress={navigation.goBack}
          />
          <Feather name="bookmark" size={28} color={colors.white} />
        </View>
      </ImageBackground>
      <View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={styles.eventName}>{item.eventName}</Text>
          <Text style={styles.clubName}>{item.clubName}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 20, color: colors.darkGray}}>
              {item.desc}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => alert('You Have Signed Up!')}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    backgroundColor: colors.gray,
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  // DESC =================
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  clubName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '400',
    color: colors.darkGray,
  },
  location: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
    color: colors.darkGray,
  },
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: colors.orange,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Details;
