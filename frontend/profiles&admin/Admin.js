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
import { Button, StyleSheet } from 'react-native';
import { alignContent, position } from "styled-system";
export const Admin = () => {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack  space={2} w="80%" h="80%">
      <Box>
      <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: "https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>

      <Center>
        <Heading style={styles.heading}>Admin</Heading>
      </Center>
      <VStack space={4}>
            <HStack space={2}>
              <Input
                style={styles.back}
                flex={1}
                onChangeText={(v) => setInputValue(v)}
                value={inputValue}
                placeholder="Add Event"
              />
              <IconButton
                borderRadius="sm"
                variant="solid"
                icon={
                  <Icon
                    as={Feather}
                    name="plus"
                    size="sm"
                    color="warmGray.50"
                  />
                }
                onPress={() => {
                  addItem(inputValue);
                  setInputValue('');
                }}
              />
            </HStack>
        </VStack>
        <TextArea
            style={styles.back}
            h={20}
            placeholder="Add Announcement"
            w={{
                base: "100%",
                md: "50%",
              }}
       />
            <Button title="Add Announcement" />
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
        <Admin />
    </NativeBaseProvider>
  )
}

