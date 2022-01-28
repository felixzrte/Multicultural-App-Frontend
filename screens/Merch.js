
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView,
    TextInput,
    SectionList,
    ImageBackground,
    Image,
    Animated,
  } from 'react-native';

  import {SafeAreaView} from 'react-native-safe-area-context';
  import {COLORS, FONTS, icons, images, SIZES} from '../constants';
  import styled from 'styled-components/native';
  import {McIcon, McText} from '../components';
  import useFetch from '../useFetch';
  import {ceil} from 'react-native-reanimated';
  import {EvilIcons} from '@expo/vector-icons';

  const merch = () => {
    const {
        data: merch,
        loading,
        error,
      } = useFetch('https://mcapp-api.herokuapp.com/api/v1/merchs');
      /*
        if (loading) {
          return null;
        }
      */
      if (error) {
        console.log(error);
      }
      console.log(merch);

  return (
    <View>
      <Text>Merch</Text>
    </View>
  );
};

//new stuff
const merchCard = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

// export default () => {
//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={{ flex: 1 }}>
//         <SectionList
//           contentContainerStyle={{ paddingHorizontal: 10 }}
//           stickySectionHeadersEnabled={false}
//           sections={SECTIONS}
//           renderSectionHeader={({ section }) => (
//             <Text style={styles.sectionHeader}>{section.title}</Text>
//           )}
//           renderItem={({ item, section }) => {
//             return <ListItem item={item} />;
//           }}
//         />
//       </SafeAreaView>
//     </View>
//   );
// };

const SECTIONS = [
  {
    title: 'Made for you',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1/200',
      },
    ]
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});
//end new 
//const styles=StyleSheet.create({});
export default merch;