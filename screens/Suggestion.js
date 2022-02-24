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
import {McIcon, McText, CustomButton} from '../components';
import {SubHeader} from '../constants/styles';

const Suggestion = () => {
  return (
    <SafeAreaView>
      <McText h1>Suggestions</McText>
      <SubHeader> Enter your Suggestion: </SubHeader>
      <TextInput style={styles.TextInput}/>
      <TouchableOpacity style={styles.button}>
        <Text>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#89CFF0',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#89CFF0',
    padding: '7%',
    borderRadius: 15,
    paddingHorizontal: '30%',
  },

  TextInput: {
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 0.5,
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    padding: '5%'
  }
});
export default Suggestion;
