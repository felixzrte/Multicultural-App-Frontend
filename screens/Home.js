/* eslint-disable react-native/no-inline-styles */
import {
  StatusBar,
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {McText, McAvatar} from '../components';
import {LinearGradient} from 'expo-linear-gradient';
import {
  Container,
  HeaderSection,
  Header2Section,
  BannerSection,
  Line,
  ClubItemBox,
  BigClubLogo,
  EventItemBox,
  AnnouncementItemBox,
  TextView,
} from '../constants/styles';
import React from 'react';
import {COLORS, images, dummyData, SIZES} from '../constants';
import useFetch from '../useFetch';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {ANNOUNCEMENTS} from '../config/urls';

const Home = ({navigation}) => {
  const renderClubItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('Club', {
            item: item,
          })
        }>
        <ClubItemBox
          style={{
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index === item.length - 1 ? 16 : 16,
          }}>
          <BigClubLogo source={{uri: item.logoImage}} />
        </ClubItemBox>
      </TouchableOpacity>
    );
  };
  const {
    data: clubs,
    loadingClubs,
    errorClubs,
  } = useFetch('https://mcapp-api.herokuapp.com/api/v1/clubs');
  /*
    if (loading) {
      return null;
    }
  */
  if (errorClubs) {
    console.log(errorClubs);
  }
  console.log(clubs);

  const renderEventItem = ({item, index}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('EventDetails', {
            item: item,
          })
        }>
        <View
          style={{
            marginTop: 16,
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index === events.length - 1 ? 16 : 16,
          }}>
          <ImageBackground
            source={{uri: item.image}}
            resizeMode="stretch"
            borderRadius={SIZES.radius}
            style={{
              width: SIZES.width / 1.7,
              height: SIZES.width / 1.2,
              justifyContent: 'space-between',
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const {
    data: events,
    loadingEvents,
    errorEvents,
  } = useFetch('https://mcapp-api.herokuapp.com/api/v1/events');
  /*
    if (loading) {
      return null;
    }
  */
  if (errorEvents) {
    console.log(errorEvents);
  }
  console.log(events);

  const renderAnnouncementItem = ({item, index}) => {
    return (
      <LinearGradient
        colors={['#4C4478', '#0C0C69']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          height: 180,
          width: SIZES.cardWidth,
          marginHorizontal: 16,
          borderRadius: 16,
          marginTop: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'column', margin: 10}}>
          <McText body4 color={'white'} style={{opacity: 0.65}}>
            {item.club}
          </McText>
          <McText h2 color={'white'}>
            {item.announcementTitle}
          </McText>
          <McText body4 color={'white'}>
            {item.announcementContents}
          </McText>
        </View>
      </LinearGradient>
    );
  };

  const {
    data: announcements,
    loadingAnnouncements,
    error,
  } = useFetch(`${ANNOUNCEMENTS}`);
  /*
    if (loading) {
      return null;
    }
  */
  if (error) {
    console.log(error);
  }
  console.log(announcements);

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{}}
        style={{}}
        showsVerticalScrollIndicator={false}>
        <StatusBar hidden={false} barStyle={'dark-content'} />
        {/* Header Section */}
        <HeaderSection>
          <McText h1>Discover</McText>
          <McText style={{marginTop: 10}} body4 color="gray">
            Explore all the Multicultural Clubs have to offer!
          </McText>
          <Line />
        </HeaderSection>
        {/* Banner Section */}
        <View>
          <FlatList
            data={announcements.announcements}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={renderAnnouncementItem}
          />
        </View>
         <View style={{flexDirection: 'row'}}>
          <McText style={{textAlign: 'left'}} h2>
            Announcements
          </McText>
          <McText
            onPress={() => navigation.navigate('AddAnnouncement')}
            style={{textAlign: 'right', position: 'absolute', right: 0}}
            h1>
            +
          </McText>
        </View> 
        {/* Clubs Section */}
        <Header2Section>
          <View style={{flexDirection: 'row'}}>
            <McText style={{textAlign: 'left'}} h2>
              Multicultural Clubs
            </McText>
            {/* <McText
              onPress={() => navigation.navigate('AddClub')}
              style={{textAlign: 'right', position: 'absolute', right: -100}}
              h1>
              +
            </McText> */}
          </View>
        </Header2Section>
        <View>
          <FlatList
            data={clubs.clubs}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={renderClubItem}
          />
        </View>
        {/* Events Section */}
        <Header2Section>
          <View style={{flexDirection: 'row'}}>
            <McText style={{textAlign: 'left'}} h2>
              Upcoming Events
            </McText>
            {/* <McText
              onPress={() => navigation.navigate('AddEvent')}
              style={{textAlign: 'right', position: 'absolute', right: -100}}
              h1>
              +
            </McText> */}
          </View>
        </Header2Section>

        <View>
          <FlatList
            data={events.events}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={renderEventItem}
          />
        </View>

        {/* Features Section */}
        <Header2Section>
          <McText h2>More Features</McText>
        </Header2Section>
        <LinearGradient
          colors={['#4C4478', '#0C0C69']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            height: 110,
            borderRadius: 16,
            marginHorizontal: 16,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{margin: 20}}
            onPress={() => navigation.navigate('Suggestion')}>
            <McText color={'white'} h2>
              Suggestions
            </McText>
            <McText color={'white'} body3>
              Leave a suggestion on what you want to see in the MCC!
            </McText>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#4C4478', '#0C0C69']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            height: 110,
            borderRadius: 16,
            marginHorizontal: 16,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{margin: 20}}
            onPress={() => navigation.navigate('Merch')}>
            <McText color={'white'} h2>
              Merch
            </McText>
            <McText color={'white'} body3>
              Explore all the club merchandise we are selling this semester!
            </McText>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{marginTop: 100}} />
      </ScrollView>
    </Container>
  );
};

export default Home;
