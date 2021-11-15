/* eslint-disable no-alert */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height;

const Details = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View source={item.imageBig} style={styles.backgroundImage}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={32} color={colors.white} />
          </TouchableOpacity>
          <View style={styles.titlesWrapper}>
            <Text style={styles.itemTitle}>{item.eventName}</Text>
            <View style={styles.locationWrapper}>
              <Entypo name="location-pin" size={24} color={colors.black} />
              <Text style={styles.locationText}>{item.location}</Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptionWrapepr}>
          <View style={styles.heartWrapper}>
            <Entypo name="heart" size={32} color={colors.orange} />
          </View>
          <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{item.desc}</Text>
          </View>
          <View style={styles.infoWrapper}></View>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => alert('You Have Signed Up')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  descriptionWrapepr: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 30,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.black,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.black,
  },
  heartWrapper: {
    position: 'absolute',
    right: 30,
    top: -25,
    width: 55,
    height: 55,
    backgroundColor: colors.white,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.darkGray,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: colors.orange,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
});

export default Details;
