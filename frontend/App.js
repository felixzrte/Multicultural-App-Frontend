import React from "react";
//import {McIcon, McText} from '../components';
import { View, Image, Button, StyleSheet, TextInput, Pressable, Text} from 'react-native';
export const ResetPassword = () => {
  return (
    <View style={styles.app , {flex: 1, alignItems: 'center', justifyContent: 'center'}}>

          <Image
            style={styles.Logo}
            source={{
              uri: "https://www.nicepng.com/png/detail/207-2073361_reset-password-png-download-reset-password-icon-png.png",
            }}
          />

      <TextInput
        style={styles.input}
        value="username"
      />
      <TextInput
        style={styles.input}
        value="New Password"
      />
      <TextInput
        style={styles.input}
        value="Re-Enter Password"
      />
        <View paddingVertical={20} paddingHorizontal={75}>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Reset Password</Text>
          </Pressable>
        </View>
    </View>
  )
}
//StyleSheet
const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white'

  },
  back: {
    backgroundColor: 'white'

  },
  heading: {
    color: 'black'
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4C9A2A',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  Logo: {
    width: 350,
    height: 200,
  },
});
export default ResetPassword;


