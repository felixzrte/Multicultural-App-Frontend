/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Button,
  Platform,
  Icon,
  ExtraView,
  TextLink,
  TextLinkContent,
  useWindowDimensions,
  StyledButton,
  ButtonText,
  StyledFormArea,
  Avatar,
  Line,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {FontAwesome, Ionicons, MaterialIcons} from '@expo/vector-icons';
import { LinearGradient } from 'react-native-svg';
import {NavigationContainer} from '@react-navigation/native';



const EditProfile = ({navigation}) => {
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D" />
        </View>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileImage}>
            <Image
              source={require('../assets/images/mcc.png')}
              style={styles.image}
              resizeMode="center"
            />
            </View>
          </View>
          <View>
            </View>
          <View style={styles.container}>
            <View style={{margin:20}}>
                <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => {}}>
                <View style={{
                    height: 20,
                    width: 70,
                    borderRadius:15,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                </View>
              </TouchableOpacity>
              <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                John Doe
              </Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" size={20} />
                <TextInput
                    placeholder='First Name'
                    placeholderTextColor='#666666'
                    autoCorrect={false}
                    style={styles.textInput}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome name="user-o" size={20} />
                <TextInput
                    placeholder='Last Name'
                    placeholderTextColor='#666666'
                    autoCorrect={false}
                    style={styles.textInput}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome name="envelope-o" size={20} />
                <TextInput
                    placeholder='Email'
                    placeholderTextColor='#666666'
                    keyboardType='email-address'
                    autoCorrect={false}
                    style={styles.textInput}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome name="lock" size={20} />
                <TextInput
                    label="Update password"
                    placeholder=" password"
                    placeholderTextColor='#666666'
                    autoCorrect={false}
                    style={styles.textInput}
                />
              </View>
              <TouchableOpacity style={styles.commandButton} onPress={() => {navigation.navigate('Login');
            }}>
                <Text styles={styles.panelButtonTitle}>Logout</Text>
              </TouchableOpacity>
             {/*  <StyledFormArea>
            <Line />
            <StyledButton
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent:'center',
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: 'black',
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
    marginTop: 20,
    marginHorizontal: 16,
  },

  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopRightRadius:20,
    borderTopLeftRadius: 20,
  },
  panelHeader:{
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
 
});

export default EditProfile;