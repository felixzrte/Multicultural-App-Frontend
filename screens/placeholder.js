/* eslint-disable react-native/no-inline-styles 
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

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
            <Ionicons
              name="ios-add"
              size={48}
              color="#DFD8C8"
              style={{marginTop: 6, marginLeft: 2}}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>MCC</Text>
          <Text style={styles.text}>Admin</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text> Yahh </Text>
            <Text> Text </Text>
          </View>
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
    color: '#f8f8ff',
    fontWeight: '200',
    fontSize: 36,
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
    width: 0,
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
});

export default Profile;
*/
