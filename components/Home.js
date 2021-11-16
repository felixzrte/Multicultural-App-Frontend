/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
  Icon,
  Animated,
} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import eventAPI from '../apis/axios';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.5;
Feather.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {
  const [events, setEvents] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

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

  const renderCategoriesData = ({item}) => {
    return (
      <ScrollView>
        <View>
          <View style={styles.categoryBox}>
            <Text>{item.text}</Text>
          </View>
        </View>
      </ScrollView>
    );
  };
  const renderCard = ({item, index}) => {
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }>
        <Animated.View style={{...styles.card, transform: [{scale}]}}>
          <Animated.View style={{...styles.cardOverlay, opacity}} />
          <View style={styles.cardDateContainer}>
            <Text style={styles.cardDateText}>Date</Text>
          </View>
          <Image
            source={require('../assets/images/mcc.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardDetailsContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.cardEventName}>{item.eventName}</Text>
                <Text style={styles.cardClubName}>{item.clubName}</Text>
                <Text style={styles.cardLocation}>{item.location}</Text>
                <Text style={styles.cardTime}>Time</Text>
              </View>
            </View>
          </View>
        </Animated.View>
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

        {/* Home */}
        <View style={styles.homeContainer}>
          <Text style={styles.homeTitle}>Home</Text>
          <View style={styles.categoriesWrapper}>
            <FlatList
              data={discoverCategoriesData}
              renderItem={renderCategoriesData}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.eventItemContainer}>
            <Animated.FlatList
              onMomentumScrollEnd={(e) => {
                setActiveCardIndex(
                  Math.round(e.nativeEvent.contentOffset.x / cardWidth),
                );
              }}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true},
              )}
              data={events.events}
              keyExtractor={(item, index) => 'key' + index}
              contentContainerStyle={{
                paddingVertical: 10,
                paddingLeft: 20,
                paddingRight: cardWidth / 2 - 40,
              }}
              renderItem={renderCard}
              snapToInterval={cardWidth}
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
  homeContainer: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  homeTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },

  eventItemContainer: {
    paddingVertical: 20,
  },
  // CATEGORIES ===================
  categoriesWrapper: {
    paddingTop: 11,
    flexDirection: 'row',
  },
  categoryBox: {
    height: 28,
    width: 89,
    borderWidth: 0.7,
    borderColor: '#2c2c2e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 5,
  },
  // CARD ================================
  card: {
    height: 350,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: colors.gray,
  },
  cardImage: {
    height: 250,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardDateContainer: {
    height: 40,
    width: 80,
    backgroundColor: colors.white,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDateText: {
    color: colors.black,
    fontSize: 15,
  },
  cardDetailsContainer: {
    height: 120,
    borderRadius: 15,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardEventName: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  cardClubName: {
    marginTop: 5,
    color: colors.darkGray,
    fontSize: 12,
  },
  cardLocation: {
    marginTop: 5,
    color: colors.darkGray,
    fontSize: 12,
  },
  cardTime: {
    marginTop: 5,
    color: colors.darkGray,
    fontSize: 12,
  },
  cardOverlay: {
    height: 350,
    backgroundColor: colors.white,
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
});

export default Home;
