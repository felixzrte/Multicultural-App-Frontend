import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView,
    TextInput,
    ImageBackground,
    Image,
    Animated,
  } from 'react-native';

  import {SafeAreaView} from 'react-native-safe-area-context';
  import {COLORS, FONTS, icons, images, SIZES} from '../constants';
  import styled from 'styled-components/native';
  import {McIcon, McText} from '../components';
  import useFetch from '../useFetch';
  import {ceil} from 'react-native-reanimated';
  import {EvilIcons} from '@expo/vector-icons';

const merch = () => {
    const {
        data: merch,
        loading,
        error,
      } = useFetch('https://mcapp-api.herokuapp.com/api/v1/merchs');
      /*
        if (loading) {
          return null;
        }
      */
      if (error) {
        console.log(error);
      }
      console.log(merch);

  return (
    <View>
      <Text>Sample Text</Text>
    </View>
  );
};
const styles=StyleSheet.create({});
export default merch;
