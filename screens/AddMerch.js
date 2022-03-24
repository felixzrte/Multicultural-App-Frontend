/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Pressable,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Logo,
  TextInput,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {McIcon, McText} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../components/AddMerchStyles.js';
import {HeaderSection, Line, Container} from '../constants/styles';

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const AddMerch = ({navigation}) => {

  return (
    <Container>
      <ScrollView>
        <HeaderSection>
          <McText h1>Merch</McText>
            <View style={{flexDirection:'row'}}>
              <McText style={{marginTop: 10, textAlign:'left'}} body4 color="gray">Add a new article of club merchandise!</McText>
            </View>
            <Line />
          </HeaderSection>

          <View style={{marginTop: 60}}>
            <McText style={{textAlign:'center'}} body1>Enter Item Name:</McText>
            <TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter Item Name Here"/>
            <McText style={{textAlign:'center'}} body1>Enter Item Price:</McText>
            <TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter Item Price Here"/>
            <McText style={{textAlign:'center'}} body1>Enter Item Picture:</McText>
            <TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter Item Picture Here"/>
            <McText style={{textAlign:'center'}} body1>Enter Your Email:</McText>
            <TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter Email Here"/>
            <McText style={{textAlign:'center'}} body1>Enter Your Phone Number:</McText>
            <TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter Phone Number Here"/>
            <McText style={{textAlign:'center'}} body1>Enter Item Descriptoin:</McText>
            <TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter Item Description Here"/>
            <McText style={{textAlign:'center'}} body1>Enter Number of Small Sizes:</McText>
            <TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter Number of Small Items Here"/>
            <McText style={{textAlign:'center'}} body1>Enter Number of Medium Sizes:</McText>
            <TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter Number of Medium Items Here"/>
            <McText style={{textAlign:'center'}} body1>Enter Number of Large Sizes:</McText>
            <TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter Number of Large Items Here"/>


          </View>
      </ScrollView>
    </Container>
  );
};

export default AddMerch;
