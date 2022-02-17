import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const CustomFlatlist = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <FlatList
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: '100%',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default CustomFlatlist;
