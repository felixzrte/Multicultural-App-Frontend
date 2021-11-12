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
  Divider,
} from "native-base";
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet } from 'react-native';
//Navbar
//import AppBar from './Navbar';

export const Events = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20' space={10}>
      <VStack
      space={10}
      width="80%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }>
      <VStack width="100%" space={5} alignItems="center">
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
          borderWidth="0"
          _web={{
            _focus: { style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    </VStack>
    <ScrollView>
    <Stack space={2} w="100%">

      
      <Center>
        <Heading ml="-5"style={styles.heading} mb="5">Club Names</Heading>
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
        <Heading style={styles.heading}>Events this Week</Heading>
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
      <Center>
      <Heading style={styles.heading}>Upcoming Events</Heading>
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
    </Stack>
    </ScrollView>
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
//export
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <Events />
      </Center>
      <AppBar/>
    </NativeBaseProvider>
  )
}

