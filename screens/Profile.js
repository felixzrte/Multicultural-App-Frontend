/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { LinearGradient } from 'react-native-svg';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D" />
          <Ionicons name="checkmark-circle-outline" size={24} color="#52575D" />
        </View>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileImage}>
            <Image
              source={require('../assets/images/mcc.png')}
              style={styles.image}
              resizeMode="center"
            />
          </View>
          <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8" />
          </View>
          <View style={styles.active} />
          <View style={styles.add}>
            <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{marginTop: 6, marginLeft: 2}}></Ionicons>
          </View>
        </View>
        <View style={styles.infoContainer}>
        <TextInput
              placeholder="Full Name"
              style={styles.TextInput}
          />
          <TextInput
              placeholder="Your Email"
              style={styles.TextInput}
          />
        </View>

        <View style={styles.button}>
          <LinearGradient
            colors={["#34FFB9", "#34FFB9"]}
            style={styles.saveButton}
          >
            <Text style={[styles.textSign, {
              color: "#34FFB9"
            }]}>Save</Text>
          </LinearGradient>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  text: {
    fontFamily: 'HelveticaNeue',
    color: 'white',
    fontWeight: '400',
    fontSize: 40,
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },

  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  dm: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#34FFB9',
    position: 'absolute',
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: '#41444B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: 'row',
  },
  TextInput: {
    fontFamily: 'HelveticaNeue',
    color: 'white',
    fontWeight: '200',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  saveButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },

});

export default Profile;
