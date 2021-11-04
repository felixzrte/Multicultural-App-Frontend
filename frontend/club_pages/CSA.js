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

export const CSA = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
    <ScrollView>
      <Center>
        <Heading style={styles.heading}>Caribbean Student Association (CSA)</Heading>
      </Center>
      <Box space={20}>
      <Image
       source={{ uri: "https://se-images.campuslabs.com/clink/images/3cba4adf-bab3-4356-b88d-1642873edc4598cf5c9c-2aad-4c75-af1d-0d52fa273aef.jpg?preset=med-sq" }}
       style={{ width: 350, height: 350 }}
       alt="CSA logo"
      />
      </Box>
<Box p="4" space={20}>
    <Heading size="md" ml="-1" style={styles.heading}>
     Messiah University Caribbean Student Association
    </Heading>
      <Text fontWeight="400" style={styles.heading}>
      The Caribbean Student Association seeks to provide
      a safe space for Caribbean students, students of 
      Caribbean decent, as well as education to those interested
      in learning more about the Caribbean culture. We plan to
      facilitate this goal through meetings and exciting events
      throughout the year to foster a community that becomes
      appreciative of the West Indian Community. We hope that through
      Christ, members can become more than an association, but a family
      in a positive, fresh, environment.
      </Text>
</Box>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-2.fna.fbcdn.net/v/t31.18172-8/17918014_10155347268009470_2228737228847026732_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=jKo1RiYixs0AX9fVWwn&tn=QXRFzC5zb0jH0sT3&_nc_ht=scontent.fagc1-2.fna&oh=f6f8aff86b6cad0a2a4f207c8ddd8072&oe=61A85AE8" }}
       style={{ width: 350, height: 350 }}
       alt="CSA Members"
      />
      </Box>
    <Box p="4" space={20}>
    <Text fontWeight="400" style={styles.heading}>
    For more information, please contact csa@messiah.edu. 
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
      <CSA />
      </Center>
      <AppBar/>
    </NativeBaseProvider>
  )
}

