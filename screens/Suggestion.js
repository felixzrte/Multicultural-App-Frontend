import React, { useState } from 'react';
import {FlatList, SafeAreaView, StatusBar, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import { CustomFlatlist } from '../components';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Multicultural Council',
    desciption:  'Student organizations whose missions are tied to the work of Multicultural Programs.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Black Studen Union',
    desciption:  'Black Student Union is a club that strives to create a safe space for its black population on campus, while also opening up the space for others to engage with and learn about black culture.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Asian Student Union',
    desciption:  'Asian Student Association strives to convey to the greater Messiah University community what it is like to live in America as an Asian.',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.description, textColor]}>{description}</Text>
  </TouchableOpacity>
);

const Suggestion = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#121112" : "#f6edf7";
    const color = item.id === selectedId ? 'black' : 'white';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };


  return (
    <View style={ styles.container, { flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.header}>Suggestions</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

//StyleSheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 16,
  },
  header: {
    flex: 1,
    fontSize: 32,
  },
});
export default Suggestion;