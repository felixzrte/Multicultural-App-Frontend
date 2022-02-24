/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ClubCard = ({text, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={{flex: 2}}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    height: 100,
    width: 130,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#dddddd',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 16,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
});

export default ClubCard;
