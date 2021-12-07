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
  FlatList,
  HStack,
  Avatar,
  VStack,
  Spacer,
  StatusBar,
  IconButton,
  View,
} from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { Button, ScrollView, StyleSheet } from 'react-native';
import { alignContent, position } from "styled-system";
import ImagedCarouselCard from "react-native-imaged-carousel-card";
export const CabinetMembers = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ]
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="100%">
    <ScrollView>
      <Heading fontSize="3xl" p="0" pb="0" style={styles.heading}>
        Clubs
      </Heading>

    <HStack space={5} alignItems="center">
    <ImagedCarouselCard
      width={200}
      height={200}
      shadowColor="#051934"
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg",
             }}
    />
    <ImagedCarouselCard
      width={200}
      height={200}
      shadowColor="#051934"
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg",
             }}
    />
    <ImagedCarouselCard
      width={200}
      height={200}
      shadowColor="#051934"
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg",
             }}
    />
    <ImagedCarouselCard
      width={200}
      height={200}
      shadowColor="#051934"
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg",
             }}
    />
    <ImagedCarouselCard
      width={200}
      text={"what"}
      height={200}
      shadowColor="#051934"
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg",
             }}
    />

    </HStack>
      <Heading fontSize="3xl" p="0" pb="0" style={styles.heading}>
        Discover
      </Heading>
      <HStack space={5} alignItems="center">
       <Image
          h='40' w='20' rounded='md' shadow={3}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
          alt="Alternate Text"
      />
      <Image
          h='40' w='20' rounded='md' shadow={3}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
          alt="Alternate Text"
      />
      <Image
          h='40' w='20' rounded='md' shadow={3}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
          alt="Alternate Text"
      />
      <Image
          h='40' w='20' rounded='md' shadow={3}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
          alt="Alternate Text"
      />
      <Image
          h='40' w='20' rounded='md' shadow={3}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
          alt="Alternate Text"
      />
      
      </HStack>
      <Box
      w={{
        base: "100%",
        md: "25%",
      }}
     />
      <Heading fontSize="xl" p="0" pb="0" style={styles.heading}>
      Events
      </Heading>
      <Box padding='0' alignContent="space-around" alignItems="center" space={2}>
      <FlatList
      style={styles.container}
      style={styles.back}
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="2"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "yellow.200",
                  }}
                  color="yellow.600"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="yellow.600"
                  _dark={{
                    color: "yellow.200",
                  }}
                >
                  {item.recentText}
                </Text>
               <Box  space={10}>
               <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
                }}
                alt="Alternate Text"
                size="2xl"
              />
                <Heading size="md" ml="-1" style={styles.heading}>
                  Event Description
               </Heading>
                 <Text fontWeight="400" style={styles.heading} alignContent="flex-start" paddingRight="200">
                   So this is where we plan on writing the individual 
                   descriptions of the events. Honestly not sure what 
                   else to write so this is filler. Watch Marvel's what
                   If highly recommend it. Also if you have time go 
                   check out the netflix marvel shows they're bomb!
                </Text> 
                </Box>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
      </Box>
      <HStack space={3} alignItems="center">

      </HStack>
      <Box
      w={{
        base: "100%",
        md: "25%",
      }}
     />
      </ScrollView>
    </Stack>
    </View>
    
  )
}

//Style's Section
const styles = StyleSheet.create({
  app: {
    backgroundColor: 'black'

  },
  back: {
    backgroundColor: 'black'

  },
  heading: {
    color: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

});
//Export Section
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CabinetMembers />
      </Center>
    </NativeBaseProvider>
  )
}

