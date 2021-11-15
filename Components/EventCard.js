import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const EventCard = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.eventName}>{item.eventName}</Text>
      <Text style={styles.clubName}>{item.clubName}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  );;
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,,
  },
  eventName: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',,
  },
  clubName: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: 'gray',,
  },
  desc: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.05,
    color: 'gray',
    fontSize: 13,
  },
});

export default EventCard;
