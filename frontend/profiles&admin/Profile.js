import React from "react";
//Navbar
//import AppBar from './Navbar';
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
  StatusBar,
  HStack,
  IconButton,
  View,
} from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { Button, StyleSheet } from 'react-native';
import { alignContent, position } from "styled-system";
export const Profile = () => {
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
        <Heading style={styles.heading}>Profile</Heading>
        <Text style={styles.heading}> Full Name </Text>
        <Text style={styles.heading}> Major </Text>
        <Text style={styles.heading}> Interests </Text>
        <Text style={styles.heading}> Clubs </Text>
      </Center>
    <Box position="relative" h={100} w="100%">
      <Fab
        position="absolute"
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Box>
    </Stack>
    </View>
  )
}
//Navbar
function AppBar(){
  return (
    <>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

        <Box safeAreaTop backgroundColor="#6200ee" />

        <HStack bg='#1A3D61' px={1} py={3} justifyContent='space-between' alignItems='center'>
          <HStack space={4} alignItems='center'>
            <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
            <Text color="white" fontSize={20} fontWeight='bold'>Home</Text>
          </HStack>
          <HStack space={2}>
            <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
            <IconButton icon={<Icon as={<MaterialIcons name='search' />}
            color="white" size='sm'  />} />
            <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
          </HStack>
        </HStack>

    </>
  )
}
//styles section
const styles = StyleSheet.create({
  app: {
    backgroundColor: '#191970'
    ,position: 'relative'

  },
  heading: {
    color: 'white'
  },

});
//Export
export default () => {
  return (
    <NativeBaseProvider>
        <AppBar />
      <Center flex={1}>
        <Profile />
      </Center>
    </NativeBaseProvider>
  )
}

