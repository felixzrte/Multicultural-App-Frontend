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

export const LAL = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
    <ScrollView>
      <Center>
        <Heading style={styles.heading}>La Alianza Latina (LAL)</Heading>
      </Center>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-1.fna.fbcdn.net/v/t1.18169-9/30414952_1665989836841293_8030466571358101493_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=825194&_nc_ohc=qfyt10dlqmsAX-LwrJj&_nc_ht=scontent.fagc1-1.fna&oh=9a5e79f3a12819ea44fcd5bf075c5e9f&oe=61A564A6" }}
       style={{ width: 350, height: 350 }}
       alt="LAL logo"
      />
      </Box>
      <Box space={20}>
       <Heading size="md" ml="-1" style={styles.heading}>
         Messiah University La Alianza Latina
       </Heading>
      </Box>  

<Box p="4" space={20}>
      <Text fontWeight="400" style={styles.heading}>
      La Alianza Latina (LAL) initiates conversations
      about issues affecting the Latino/Hispanic community.
      Collaborating with different groups and making connections
      points. Being a community and a place for all the Hispanic/Latino
      students on campus. Getting the majority to care, not just about
      LAL but also all the other Multicultural clubs. Creating friendship
      and connections to other students, professors, administration, etc.
      </Text>
</Box>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-1.fna.fbcdn.net/v/t1.6435-9/72703609_839008689829910_9051571605553020928_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8631f5&_nc_ohc=EouGxIdr6pIAX_E66cx&_nc_ht=scontent.fagc1-1.fna&oh=304029588e9f25b77bd807484421119f&oe=61A6DE80" }}
       style={{ width: 350, height: 350 }}
       alt="LAL Members"
      />
      </Box>
    <Box p="4" space={20}>
    <Text fontWeight="400" style={styles.heading}>
    For more information, please contact laalianzalatina@messiah.edu.
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
      <LAL />
      </Center>
      <AppBar/>
    </NativeBaseProvider>
  )
}

