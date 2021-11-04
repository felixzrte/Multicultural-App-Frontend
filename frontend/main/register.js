import React from "react";
import { 
  Input,
  Stack,
  Center,
  Heading,
  NativeBaseProvider, 
  Box,
  AspectRatio,
  Image,
  StatusBar,
  HStack,
  IconButton,
  Icon,
  Text,
  View,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import { Button, StyleSheet } from 'react-native';
//import AppBar from './Navbar';
export const Register = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
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
        <Heading style={styles.heading}>Registration Page</Heading>
      </Center>
      <Input
        style={styles.back}
        variant="rounded"
        placeholder="First Name"
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
        placeholder="Last Name"
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
        placeholder="Messiah Email"
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
        placeholder="Password"
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
            <Button title="Register" />
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
//export section
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Register />
      </Center>
      <AppBar />
    </NativeBaseProvider>
  )
}

