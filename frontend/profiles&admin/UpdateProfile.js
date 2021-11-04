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
  Fab,
  Icon,
  Text,
  View,
} from "native-base";
import { AntDesign } from "@expo/vector-icons"
import { Button, StyleSheet } from 'react-native';
export const UpdateProfile = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
      <Box>
      <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: "https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
            }}
            alt="ProfileImage"
          />
        </AspectRatio>
      </Box>
        <Center>
        <Heading style={styles.heading}>Update Profile</Heading>
        </Center>
        <Input
        style={styles.back}
        variant="rounded"
        placeholder="Full Name"
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
        placeholder="Major"
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
        placeholder="Interests"
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
        placeholder="Clubs"
        _light={{
          placeholderTextColor: "blueGray.400",
        }}
        _dark={{
          placeholderTextColor: "blueGray.50",
        }}
      />
        <Button title="Submit Changes" />
    </Stack>
    </View>
  )
}
//styles section
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
        <UpdateProfile />
      </Center>
    </NativeBaseProvider>
  )
}

