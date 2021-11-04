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

export const ISA = () => {
  return (
    <View style={styles.app} w="100%" h="100%" alignContent='center' alignItems='center' paddingTop='20'>
    <Stack space={2} w="80%">
    <ScrollView>
      <Center>
        <Heading style={styles.heading}>ISA/Mukappa (international/MK/TCK students)</Heading>
      </Center>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-1.fna.fbcdn.net/v/t1.6435-9/53270731_2194371500653687_4522469398681747456_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=xy4BKsOD9bEAX869Fjd&_nc_ht=scontent.fagc1-1.fna&oh=89449a8fcc0a1de9cb319ea03d2dead0&oe=61A57894" }}
       style={{ width: 350, height: 350 }}
       alt="ISA/Mukappa logo"
      />
      </Box>
      <Box space={20}>
       <Heading size="md" ml="-1" style={styles.heading}>
         Messiah University ISA/Mukappa
       </Heading>
      </Box>  

<Box p="4" space={20}>
      <Text fontWeight="400" style={styles.heading}>
      ISA/MuKappa exists to welcome and support international,
      missionary and third culture kids. Through fostering relationships
      and educating the greater student body, we hope to aid in the development
      of international/MK/TCK students at Messiah University.
      </Text>
</Box>
      <Box space={20}>
      <Image
       source={{ uri: "https://scontent.fagc1-2.fna.fbcdn.net/v/t1.6435-9/56905094_2253436454747191_6312835093069037568_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3nSYcgZEwjgAX8Q6H5X&_nc_ht=scontent.fagc1-2.fna&oh=1de23dd630319add09e387c862d3c366&oe=61A67A04" }}
       style={{ width: 350, height: 350 }}
       alt="ISA/Mukappa logo"
      />
      </Box>
    <Box p="4" space={20}>
    <Text fontWeight="400" style={styles.heading}>
    For more information, please contact isamukappa@messiah.edu.
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
      <ISA />
      </Center>
      <AppBar/>
    </NativeBaseProvider>
  )
}

