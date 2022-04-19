/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
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
  HeaderSection,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import KeyboardAvoidingWrapper from '../constants/KeyboardAvoidingWrapper';
import {CustomButton, McText} from '../components';
import {InnerContainer, StyledContainer} from '../constants/styles';
import {AuthContext} from '../context/AuthContext';


const Profile = ({navigation}) => {
  const {height} = useWindowDimensions();
  const {userInfo, logout, isLoading} = useContext(AuthContext);
  return (
      <InnerContainer style={{backgroundColor: 'transparent'}}>
      <ScrollView>
      <View style={{ flexDirection: 'column'}}>
       <View style={{ flexDirection: 'row'}}>
       <View style={{marginBottom:"10%", marginLeft:"37%", marginTop:"20%"}}>
        <McText h1>Profile</McText>
       </View>
       </View>
      </View> 
      <View style={{ flexDirection: 'column'}}>
       <View style={{ flexDirection: 'row', marginBottom:"10%" }}> 
        <View style={{height: 200,  width: 200, borderRadius: 300/2, backgroundColor: 'transparent',}}>
        <Image source={icons.mainpic} style={{ height: 200,width: 200, borderRadius: 200/2, backgroundColor: 'transparent',}} />
        </View>
        <View style={{marginTop: "20%"}}>
        <McText h1>  {userInfo.user.name}</McText>
        </View>
        </View>
      </View>
      <View style={{ flexDirection: 'column', margin: "3%"}}>
       <View style={{ flexDirection: 'row'}}> 
       <TouchableOpacity
             style={{
             justifyContent: "center",
             alignItems: "center",
             marginRight: "5%", 
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.profile}
            style={{
              height: 40,
              width: 40,
              marginRight: "5%"
            }}
            />
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => navigation.navigate('UpdateEvents')}>
      <View style={{marginTop: "5%"}}>
       <McText h2> Edit Profile</McText>
      </View>
      </TouchableOpacity> 
       </View>
      </View>

      <View style={{ flexDirection: 'column', margin: "3%"}}>
       <View style={{ flexDirection: 'row'}}> 
       <TouchableOpacity
             style={{
             justifyContent: "center",
             alignItems: "center",
             marginRight: "5%", 
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.password}
            style={{
              height: 40,
              width: 40,
             marginRight: "5%"
            }}
            />
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => navigation.navigate('UpdateEvents')}>
      <View style={{marginTop: "5%"}}>
       <McText h2> Change Password</McText>
      </View>
      </TouchableOpacity> 
       </View>
      </View>
      <View style={{ flexDirection: 'column', margin: "3%"}}>
       <View style={{ flexDirection: 'row' , marginRight: "5%"}}> 
       <TouchableOpacity
             style={{
             justifyContent: "center",
             alignItems: "center",
             marginRight: "10%", 
             marginLeft: "2%"
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.feedback}
            style={{
              height: 40,
              width: 40,
            }}
            />
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => navigation.navigate('UpdateEvents')}>
      <View style={{marginTop: "5%", }}>
       <McText h2>Send Feedback</McText>
      </View>
      </TouchableOpacity> 
       </View>
      </View>
      <View style={{ flexDirection: 'column', margin: "3%"}}>
       <View style={{ flexDirection: 'row'}}> 
       <TouchableOpacity
             style={{
             justifyContent: "center",
             alignItems: "center",
             marginRight: "8%", 
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.resouces}
            style={{
              height: 50,
              width: 50,
            }}
            />
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => navigation.navigate('UpdateEvents')}>
      <View style={{marginTop: "5%"}}>
       <McText h2> Resources</McText>
      </View>
      </TouchableOpacity> 
       </View>
      </View>

      <View style={{ flexDirection: 'column', margin: "3%"}}>
       <View style={{ flexDirection: 'row'}}> 
       <TouchableOpacity
             style={{
             justifyContent: "center",
             alignItems: "center",
             marginRight: "6%", 
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.about}
            style={{
              height: 40,
              width: 40,
              marginRight: "5%"
            }}
            />
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => navigation.navigate('UpdateEvents')}>
      <View style={{marginTop: "5%"}}>
       <McText h2> About</McText>
      </View> 
      </TouchableOpacity>
       </View>
      </View>
      <View style={{marginTop: "20%", marginBottom: "20%"}}>   
      <CustomButton text="LOGOUT" onPress={logout} />
      </View>
      </ScrollView>
      </InnerContainer>
  );
};


export default Profile;

