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
    View,
  } from "native-base";
  import { MaterialIcons } from "@expo/vector-icons";
  import { StyleSheet } from 'react-native';
  import Events from './Events'
  function AppBar(){
    return (
      <View style={styles.footer}>
      <>
          <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
  
          <Box safeAreaTop backgroundColor="#6200ee" />
  
          <HStack style={styles.bottom} bg='#1A3D61' px={1} py={3} justifyContent='space-between' alignItems='center'>
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
      </View>
    )
  }
  //styles section
const styles = StyleSheet.create({
  footer: {
    flex: 0.3,
  },
});
  export default () => {
    return (
      <NativeBaseProvider>
        <AppBar/>
      </NativeBaseProvider>
    )
  }