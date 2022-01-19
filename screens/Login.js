import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {CustomButton, CustomInput} from '../components';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onLoginPressed = () => {
    console.warn('Login');
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };
  const onRegisterPressed = () => {
    console.warn('Register');
  };
  const onHomePressed = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Image
        source={images.mcc}
        style={(styles.logo, {height: height * 0.35})}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton text="Login" onPress={onLoginPressed} />
      <CustomButton
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type="Tertiary"
      />
      <CustomButton
        text="Don't Have An Account? Create One"
        onPress={onRegisterPressed}
        type="Tertiary"
      />
      <CustomButton
        text="Go To Home Screen"
        onPress={onHomePressed}
        type="Tertiary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
  },
});

export default Login;
