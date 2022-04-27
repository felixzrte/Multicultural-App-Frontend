import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {HeaderSection, Line, Container} from '../constants/styles';
import {McIcon, McText} from '../components';

const Bookmark = ({navigation}) => {
  return (
    <Container>
      <ScrollView>
        <TouchableOpacity
          style={{marginLeft: 16}}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.left_arrow}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
        <HeaderSection>
          <McText h1 style={{marginBottom: '-2%'}}>
            Favorites
          </McText>
          <View style={{flexDirection: 'row'}}>
            <McText
              style={{marginTop: 8, textAlign: 'left'}}
              body4
              color="gray">
              View all your favorited events here!
            </McText>
          </View>
          <Line />
        </HeaderSection>
      </ScrollView>
    </Container>
  );
};

export default Bookmark;
