import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import { Button, NativeBaseProvider, Center, Box, Heading, FlatList, HStack, VStack, Spacer, Avatar, Text, AspectRatio} from "native-base";

const Place = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button>Click Me</Button>
        <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg',
              }}
            />
    </View>
  );
};

//Style's Section
const styles = StyleSheet.create({
  app: {
    backgroundColor: '#6200ee'
    ,position: 'relative'

  },
  back: {
    backgroundColor: 'white'

  },
  heading: {
    color: 'black'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Place />
      </Center>
    </NativeBaseProvider>
  )
}
/*
    <ScrollView horizontal={true} >
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
      </ScrollView>

   <HStack space={3} justifyContent="center">
    <Image
    source={{ uri: "https://wallpaperaccess.com/full/317501.jpg", }}
    width={45}
    height={75}
   />
    <Image
    source={{ uri: "https://wallpaperaccess.com/full/317501.jpg", }}
    width={45}
    height={75}
    />
      <Image
    source={{ uri: "https://wallpaperaccess.com/full/317501.jpg", }}
    width={45}
    height={75}
   />
    </HStack>

*/