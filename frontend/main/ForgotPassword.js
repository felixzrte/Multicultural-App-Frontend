import React from "react";
//Navbar
import AppBar from './Navbar';
//
import { 
  Input,
  Stack,
  Center,
  Heading,
  NativeBaseProvider, 
  Box,
  AspectRatio,
  Image,
  View,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import { Button, StyleSheet } from 'react-native';
export const ForgotPassword = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
      <Box>
      <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26fd2b78444493.5ca4ef9d727af.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>

      <Center>
        <Heading style={styles.heading}>Forgotten Password</Heading>
      </Center>
      <Input
        style={styles.back}
        variant="rounded"
        placeholder="New-Password"
        _light={{
          placeholderTextColor: "blueGray.400",
        }}
        _dark={{
          placeholderTextColor: "blueGray.50",
        }}
      />

      <Input
        style={styles.back}
        variant="rounded"
        placeholder="Re-enter Password"
        _light={{
          placeholderTextColor: "blueGray.400",
        }}
        _dark={{
          placeholderTextColor: "blueGray.50",
        }}
      />
            <Button title="Submit" />
            <Button title="Return to Login Page" />
    </Stack>
    </View>
  )
}
//StyleSheet
const styles = StyleSheet.create({
  app: {
    backgroundColor: '#191970'
    ,position: 'relative'

  },
  back: {
    backgroundColor: 'white'

  },
  heading: {
    color: 'white'
  },

});
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ForgotPassword />
      </Center>
    </NativeBaseProvider>
  )
}

