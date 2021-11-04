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
import { SocialIcon } from 'react-native-elements'
//Navbar
//import AppBar from './Navbar';

export const ASU = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
    <ScrollView>
      <Center>
        <Heading style={styles.heading}>African Studen Union (ASU)</Heading>
      </Center>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-1.fna.fbcdn.net/v/t1.6435-9/70684016_2625643524124205_8806082038101704704_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3kTTHzcukSsAX_OWCFn&_nc_ht=scontent.fagc1-1.fna&oh=8f1a36080b0735a8e5390eb63c8d7196&oe=61A7E4D3" }}
       style={{ width: 350, height: 350 }}
       alt="ASU logo"
      />
      </Box>
<Box p="4" space={20}>
    <Heading size="md" ml="-1" style={styles.heading}>
     Messiah University African Studen Union
    </Heading>
      <Text fontWeight="400" style={styles.heading}>
      "Little Africa" Mission Statement

      - Increase cultural diversity through the promotion of African Culture.

      - Educate our members and the broader Messiah Community through informed discourse about Africa.

      -Provide educational and social support for African students at Messiah.
      </Text>
</Box>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-2.fna.fbcdn.net/v/t1.6435-9/120611955_3573101089378439_6349927665999970343_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=UyfOXgMt8sYAX8JXupd&_nc_oc=AQlUlh0ni0XiWqCKIin8nlsuK-2-fY0sdZJDRkQvYEWjVe9QQMopcpP_flS5yvoN_fs&_nc_ht=scontent.fagc1-2.fna&oh=2ccc6cb3d97be73f9dd718e9d4c5137d&oe=61A5A176" }}
       style={{ width: 350, height: 350 }}
       alt="ASU Members"
      />
      </Box>
    <Box p="4" space={20}>
    <Text fontWeight="400" style={styles.heading}>
    For more information, please contact africansu@messiah.edu.
    </Text>
    <Text>
    </Text>
    <HStack space={2}>
    <SocialIcon
      type='facebook'
    />
    <SocialIcon
      type='twitter'
    />
    <SocialIcon
      type='youtube'
    />
    <SocialIcon
      type='instagram'
    />
    </HStack>
    </Box>
    </ScrollView>
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
      <Center flex={1}>
      <ASU />
      </Center>
      <AppBar/>
    </NativeBaseProvider>
  )
}

