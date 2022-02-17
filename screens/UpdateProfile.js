/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { LinearGradient } from 'react-native-svg';
import { Button } from 'native-base';

const UpdateProfile = () => {
  const [userData, setUserData] = useState(null);
  
  return (
    <View style={styles.action}>
      <FontAwesome name='user-o' color='#333333' size={20} />
      <TextInput
        placeholder='First Name'
        placeholderTextColor={'#666666'}
        autoCorrect={false}
        value={userData ? userData.fName : ''}
        onChangeText={(txt) => setUserData({ ... userData, fName: txt})}
        style={styles.textInput}
      />
      <FormButton buttonTitle="Update" onPress={() => {}} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

});

export default UpdateProfile;
