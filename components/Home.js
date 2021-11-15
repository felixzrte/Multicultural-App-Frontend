/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import eventAPI from '../apis/axios';
const {width, height} = Dimensions.get('window');

Feather.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEventsFromAPI();
  }, []);

  function getEventsFromAPI() {
    eventAPI
      .get('events')
      .then(function (res) {
        setEvents(res.data);
        console.log(events);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  if (!events) {
    return null;
  }

  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }>
        <View style={styles.cardView}>
          <Text style={styles.eventName}>{item.eventName}</Text>
          <Text style={styles.clubName}>{item.clubName}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
          </View>
        </SafeAreaView>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Events</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text
              style={[styles.discoverCategoriesText, {color: colors.orange}]}>
              All
            </Text>
            <Text style={styles.discoverCategoriesText}>This Week</Text>
            <Text style={styles.discoverCategoriesText}>This Month</Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={events.events}
              keyExtractor={(item, index) => 'key' + index}
              renderItem={renderDiscoverItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // DISCOVER ======================
  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoriesText: {
    marginRight: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  // ================================
  cardView: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  eventName: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  clubName: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: 'gray',
  },
  desc: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.05,
    color: 'gray',
    fontSize: 13,
  },
});

export default Home;
