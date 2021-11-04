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
  IconButton,
  VStack,
  HStack,
  Icon,
  TextArea,
  View,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons';
import { Button, StyleSheet, Platform } from 'react-native';
import { alignContent, position } from "styled-system";
export const Homepage = () => {
  const myRef = React.useRef({})
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack  space={2} w="80%" h="80%">
      <Box>
      <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: "data:image/png;base64,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",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Center>
        <Heading space={10} style={styles.heading}>Welcome!</Heading>
      </Center>

      <Box
      width="100%"
      bg="primary.500"
      p="4"
      shadow={2}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      }}
      ref={myRef}
    >
      Login
    </Box>

    <Box
      width="100%"
      bg="primary.500"
      p="4"
      shadow={2}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      }}
      ref={myRef}
    >
      Register
    </Box>
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

//Export
export default () => {
  return (
    <NativeBaseProvider>
        <Homepage />
    </NativeBaseProvider>
  )
}

