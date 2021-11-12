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
  View,
} from "native-base";
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet } from 'react-native';
//Navbar
//import AppBar from './Navbar';

export const EventsInfo = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
      <Center>
        <Heading style={styles.heading}>Event Name</Heading>
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
<Box p="4" space={20}>
    <Heading size="md" ml="-1" style={styles.heading}>
     Event Description
    </Heading>
      <Text fontWeight="400" style={styles.heading}>
            So this is where we plan on writing the individual descriptions of the
            events. Honestly not sure what else to write so this is filler.
            Watch Marvel's what If highly recommend it. Also if you have time go 
            check out the netflix marvel shows they're bomb!
      </Text> 
</Box>
    </Stack>
    </View>
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
//StyleSheet
const styles = StyleSheet.create({
  app: {
    backgroundColor: '#F9FC78'
    ,position: 'relative'

  },
  back: {
    backgroundColor: 'white'

  },
  heading: {
    color: 'white'
  },

});
//Export
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <EventsInfo />
      </Center>
      <AppBar/>
    </NativeBaseProvider>
  )
}

