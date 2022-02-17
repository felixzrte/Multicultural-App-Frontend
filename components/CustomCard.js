import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const CustomCard = ({ height, width, source, alt }) => {
    return (
      <Image
        height='height'
        width='width'
        source={{ uri:'uri',}}
        alt="alt"
        style={[styles.container, styles[`container${type}`]]}>
      </Image>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
      borderRadius: 5,
    },
    containerPrimary: {
      backgroundColor: COLORS.blue,
    },
    containerTeriary: {},
  });
  
  export default CustomCard;