import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {CustomButton, CustomInput, McText} from '../components';



const UpdateEvents = () => {

  return (
    <View style={{center: 'center'}}>
      <SafeAreaView>
          <View>
            <McText>
                Update Page
            </McText>
            <MyTextInput
                  label="UpdateEventName"
                  placeholder="UpdateEventName"
                  placeholderTextColor={COLORS.gray}
                  value={values.eventname}
                  keyboardType="text"
                />
          </View>
    </SafeAreaView>
    </View>
  );
};


export default UpdateEvents;
