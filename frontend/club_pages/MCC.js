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

export const MCC = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
    <ScrollView>
      <Center>
        <Heading style={styles.heading}>Multicultural Council (MCC)</Heading>
      </Center>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-1.fna.fbcdn.net/v/t31.18172-8/14066223_732688903539265_1399164961096908764_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Knv3GmX2F8IAX9TTZS4&_nc_ht=scontent.fagc1-1.fna&oh=433d24f4a469e8da726bdf97ed46dbc4&oe=61A68EC8" }}
       style={{ width: 350, height: 350 }}
       alt="MCC logo"
      />
      </Box>
      <Box space={20}>
       <Heading size="md" ml="-1" style={styles.heading}>
         Messiah University Multicultural Council
       </Heading>
      </Box>  

<Box p="4" space={20}>
      <Text fontWeight="400" style={styles.heading}>
      Student organizations whose missions are tied to 
      the work of Multicultural Programs (MP) through 
      their focus on racial, ethnic, and cultural celebration
      and reconciliation gather together to form a common
      Multicultural Council under the support and advisement of
      both MP and Student Government Association.
      </Text>
</Box>
<Box p="4" space={20}>
<Text fontWeight="400" style={styles.heading}>

      "It is the mission of the Messiah University Multicultural Council
      to serve the entire student body through our efforts to improve campus
      life for all ethnic minority students. We seek to bring unification amongst
      our organizations and knowledge of our cultures to the Messiah University 
      Community. In all things we will uplift Jesus as the head of our council and
      the Body of Christ. We pursue love. We embrace unity. We uphold the value of
      our understanding and our differences."
</Text>
</Box>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-1.fna.fbcdn.net/v/t1.6435-9/41990738_1192765917531559_7192025300971028480_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=m2Tpdx-4SDcAX-Znxgh&_nc_ht=scontent.fagc1-1.fna&oh=a2d49b6728cc420c7e3fde0cae4a933d&oe=61A87CF5" }}
       style={{ width: 350, height: 350 }}
       alt="MCC Members"
      />
      </Box>
    <Box p="4" space={20}>
    <Text fontWeight="400" style={styles.heading}>
    For more information, please contact multiculturalcouncil@messiah.edu.
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
      <MCC />
      </Center>
      <AppBar/>
    </NativeBaseProvider>
  )
}

