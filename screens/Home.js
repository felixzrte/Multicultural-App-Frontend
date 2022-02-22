/* eslint-disable react-native/no-inline-styles */
import {StatusBar, View, Image, FlatList} from 'react-native';
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
} from '../constants/styles';
import React from 'react';
import {COLORS, images, dummyData} from '../constants';
import useFetch from '../useFetch';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const renderClubItem = ({item, index}) => {
  return (
    <ClubItemBox
      style={{
        marginLeft: index === 0 ? 16 : 0,
        marginRight: index === dummyData.Clubs.length - 1 ? 16 : 10,
      }}>
      <TouchableOpacity>
        <BigClubLogo source={item.logo} />
      </TouchableOpacity>
    </ClubItemBox>
  );
};
const renderEventItem = ({item, index}) => {
  return (
    <EventItemBox
      style={{
        marginLeft: index === 0 ? 16 : 0,
        marginRight: index === dummyData.Clubs.length - 1 ? 16 : 16,
      }}>
      <McText body4>{item.eventName}</McText>
    </EventItemBox>
  );
};

const Home = ({navigation}) => {
  const {
    data: events,
    loading,
    error,
  } = useFetch('https://mcapp-api.herokuapp.com/api/v1/events');
  /*
    if (loading) {
      return null;
    }
  */
  if (error) {
    console.log(error);
  }
  console.log(events);
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
        <BannerSection>
          <LinearGradient
            colors={['#4C4478', '#0C0C69']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              height: 150,
              borderRadius: 16,
              backgroundColor: 'green',
              justifyContent: 'space-between',
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}>
            <View
              style={{width: 175, margin: 20, justifyContent: 'space-between'}}>
              <McText h2 color="white">
                Stay tuned for the big announcment
              </McText>
              <McText body3 color="white">
                Tomorrow @7pm
              </McText>
            </View>
          </LinearGradient>
        </BannerSection>
        {/* Clubs Section */}
        <Header2Section>
          <McText h2>Multicultural Clubs </McText>
        </Header2Section>
        <View>
          <FlatList
            keyExtractor={(item) => 'club' + item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}
            data={dummyData.Clubs}
            renderItem={renderClubItem}
          />
        </View>
        {/* Events Section */}
        <Header2Section>
          <McText h2>Upcoming Events</McText>
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
            onPress={() => navigation.navigate('')}>
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
            onPress={() => navigation.navigate('')}>
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
