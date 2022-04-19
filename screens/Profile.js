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
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {CustomButton, McText} from '../components';
import {InnerContainer, StyledContainer} from '../constants/styles';
import {AuthContext} from '../context/AuthContext';

const Profile = ({navigation}) => {
  const {height} = useWindowDimensions();
  const {userInfo, logout, isLoading} = useContext(AuthContext);
  return (
    <StyledContainer>
      <InnerContainer style={{backgroundColor: 'transparent'}}>
      <ScrollView>
      <View style={{ flexDirection: 'column'}}>
       <View style={{ flexDirection: 'row'}}>
       <View style={{marginBottom:"10%", marginLeft:"37%"}}>
        <McText h1>Profile</McText>
       </View>
       </View>
      </View> 
      <View style={{ flexDirection: 'column'}}>
       <View style={{ flexDirection: 'row'}}> 
        <View style={{height: 200,  width: 200, borderRadius: 300/2, backgroundColor: 'transparent',}}>
        <Image source={require('../assets/images/mcc.png')} style={{ height: 200,width: 200, borderRadius: 200/2, borderColor: '#000000'}} />
        </View>
        <View style={{marginTop: "20%"}}>
        <McText h1>    {userInfo.user.name}</McText>
        </View>
        </View>
      </View>

      <View style={{ flexDirection: 'column', margin: "7%"}}>
       <View style={{ flexDirection: 'row'}}> 
       <TouchableOpacity
             style={{
             borderRadius: '50/2',
             borderColor: "#000000",
             justifyContent: "center",
             alignItems: "center",
             marginRight: "10%", 
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.profile}
            style={{
              height: 80,
              width: 80,
            }}
            />
      </TouchableOpacity>
      <View style={{marginTop: "6%"}}>
       <McText h1> Edit Profile</McText>
      </View> 
       </View>
      </View>

      <View style={{ flexDirection: 'column', margin: "7%"}}>
       <View style={{ flexDirection: 'row'}}> 
       <TouchableOpacity
             style={{
             borderRadius: '50/2',
             borderColor: "#000000",
             justifyContent: "center",
             alignItems: "center",
             marginRight: "10%", 
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.password}
            style={{
              height: 80,
              width: 80,
            }}
            />
      </TouchableOpacity>
      <View style={{marginTop: "6%"}}>
       <McText h1> Change Password</McText>
      </View> 
       </View>
      </View>

      <View style={{ flexDirection: 'column', margin: "7%"}}>
       <View style={{ flexDirection: 'row'}}> 
       <TouchableOpacity
             style={{
             borderRadius: '50/2',
             borderColor: "#000000",
             justifyContent: "center",
             alignItems: "center",
             marginRight: "10%", 
             marginLeft: "2%"
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.feedback}
            style={{
              height: 80,
              width: 80,
            }}
            />
      </TouchableOpacity>
      <View style={{marginTop: "6%"}}>
       <McText h1>Send Feedback</McText>
      </View> 
       </View>
      </View>

      <View style={{ flexDirection: 'column', margin: "7%"}}>
       <View style={{ flexDirection: 'row'}}> 
       <TouchableOpacity
             style={{
             borderRadius: '50/2',
             borderColor: "#000000",
             justifyContent: "center",
             alignItems: "center",
             marginRight: "7%", 
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.resouces}
            style={{
              height: 100,
              width: 100,
            }}
            />
      </TouchableOpacity>
      <View style={{marginTop: "6%"}}>
       <McText h1>Resources</McText>
      </View> 
       </View>
      </View>

      <View style={{ flexDirection: 'column', margin: "7%"}}>
       <View style={{ flexDirection: 'row'}}> 
       <TouchableOpacity
             style={{
             borderRadius: '50/2',
             borderColor: "#000000",
             justifyContent: "center",
             alignItems: "center",
             marginRight: "10%",
             marginLeft: "2%" 
              }}
            onPress={() => navigation.navigate('UpdateEvents')}>
      <Image
            source={icons.about}
            style={{
              height: 80,
              width: 80,
            }}
            />
      </TouchableOpacity>
      <View style={{marginTop: "6%"}}>
       <McText h1>About</McText>
      </View> 
       </View>
      </View>



      <View style={{marginTop: "20%", marginBottom: "20%"}}>   
      <CustomButton text="LOGOUT" onPress={logout} />
      </View>
      </ScrollView>
      </InnerContainer>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;

