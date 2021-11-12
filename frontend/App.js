import React from "react";
import { 
  Input,
  Stack,
  Center,
  TextArea,
  Heading,
  NativeBaseProvider, 
  Box,
  AspectRatio,
  Image,
  Text,
  VStack,
  FormControl,
  Link,
  Button,
  HStack,
  Pressable,
  Icon,
  IconButton,
  StatusBar,
  ScrollView,
  Avatar,
} from "native-base";
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet } from 'react-native';
//Navbar
//import AppBar from './Navbar';

export const Events = () => {
  return (
    <ScrollView>
    <Stack space={2} w="100%">
      <Center>
        <Heading ml="-5">Club Name</Heading>
      </Center>
      <HStack space={2}>
      <Avatar
        bg="green.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
      >
        SS
      </Avatar>
      <Avatar
        bg="cyan.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
        }}
      >
        GG
      </Avatar>
      <Avatar
        bg="indigo.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
        }}
      >
        RS
      </Avatar>
      <Avatar
        bg="amber.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      >
        AK
      </Avatar>
      <Avatar
        bg="amber.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
      >
        AK
      </Avatar>
      <Avatar
        bg="amber.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
        }}
      >
        AK
      </Avatar>

    </HStack>

      <Center>
        <Heading>Name of Event</Heading>
      </Center>
      <Box>
      <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: "https://www.messiah.edu/images/download_university.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
<Box p="4" space={2}>
    <Heading size="md" ml="-1">
     Event Description
    </Heading>
   <Text
     fontSize="xs"
     _light={{ color: 'violet.500' }}
     _dark={{ color: 'violet.300' }}
     fontWeight="500"
     ml="-0.5"
     mt="-1"
   >
     Event Name
   </Text>
      <Text fontWeight="400">
            So this is where we plan on writing the individual descriptions of the
            events. Honestly not sure what else to write so this is filler.
            Watch Marvel's what If highly recommend it. Also if you have time go 
            check out the netflix marvel shows they're bomb!
      </Text> 
</Box>
    </Stack>
    </ScrollView>
  )
}


//Navbar Start
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
//navbar end

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
      <Events />
      </Center>
      <AppBar/>
    </NativeBaseProvider>
  )
}

