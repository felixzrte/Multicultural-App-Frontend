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

export const BSU = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
    <ScrollView>
      <Center>
        <Heading style={styles.heading}>Black Studen Union (BSU)</Heading>
      </Center>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-1.fna.fbcdn.net/v/t1.18169-9/21077268_699687080222638_8852049989955474131_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Gke1de18go0AX84NurY&_nc_ht=scontent.fagc1-1.fna&oh=4c18fdde08347e07b6575d38402dec02&oe=61A7FB7F" }}
       style={{ width: 350, height: 350 }}
       alt="BSU logo"
      />
      </Box>
<Box p="4" space={20}>
    <Heading size="md" ml="-1" style={styles.heading}>
     Messiah University Black Student Union
    </Heading>
      <Text fontWeight="400" style={styles.heading}>
      Black Student Union is a club that strives to create
      a safe space for its black population on campus, while
      also opening up the space for others to engage with and
      learn about black culture. We are a club that is making
      an effort to speak up for our community.
      </Text>
</Box>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-2.fna.fbcdn.net/v/t1.6435-9/73528690_1186877068170301_225775074857189376_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=clY9jVrVYwIAX9IiHB_&_nc_ht=scontent.fagc1-2.fna&oh=073b3caf8ec98c5635119e13392caf94&oe=61A548F9" }}
       style={{ width: 350, height: 350 }}
       alt="BSU Members"
      />
      </Box>
    <Box p="4" space={20}>
    <Text fontWeight="400" style={styles.heading}>
    For more information, please contact blackstudentunion@messiah.edu.
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
      <BSU />
      </Center>
      <AppBar/>
    </NativeBaseProvider>
  )
}

