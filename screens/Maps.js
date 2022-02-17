/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Button, NativeBaseProvider, Center, Box, Heading, FlatList, HStack, VStack, Spacer, Avatar, Text, ScrollView } from "native-base";

export const Maps = () => {
  const data = [{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "Andrew Hall",
  recentText: "Good Day!",
  avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
  id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  fullName: "Sarah Conner",
  recentText: "Cheer up, there!",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
}, {
  id: "58694a0f-3da1-471f-bd96-145571e29d72",
  fullName: "Anthony Stone",
  recentText: "Good Day!",
  avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
}, {
  id: "68694a0f-3da1-431f-bd56-142371e29d72",
  fullName: "Drew Conners",
  recentText: "All the best",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
}, {
  id: "28694a0f-3da1-471f-bd96-142456e29d72",
  fullName: "Kiara Mcneil",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
}];
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ScrollView>
 <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="xl" p="4" pb="3" style={styles.heading}>
        Suggestions
      </Heading>
      <FlatList
      style={styles.back}
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="6"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
    <Spacer />
    <Box>
    <Button>Click Me</Button>
    </Box>
    </ScrollView>
  </View>
  );
};
//Style's Section
const styles = StyleSheet.create({
  app: {
    backgroundColor: '#6200ee'
    ,position: 'relative'

  },
  back: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 24,

  },
  heading: {
    color: 'black'
  },
});

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Maps />
      </Center>
    </NativeBaseProvider>
  )
}