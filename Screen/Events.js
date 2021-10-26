import React, { Component } from "react";
import {View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
import axios from "axios";

class EventItem extends Component {
    render() {
        return (
            <View style = {styles.cardView}>
                <Text style = {styles.event}>{`${this.props.item.eventName}`}</Text>
                <Text style = {styles.club}>{`${this.props.item.clubName}`}</Text>
                <Text style = {styles.description}>{`${this.props.item.desc}`}</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    event: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    club: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 18,
        color: 'gray'
    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.05,
        color: 'gray',
        fontSize: 15

    },
});
export default class App extends Component {
    state = {
      events: []
    };
  
    componentWillMount() {
      this.fetchData();
    }
  
    fetchData = async () => {
        let res = await axios.get("https://mcapp-api.herokuapp.com/api/v1/events");
        let { data } = res.data;
        this.setState({ events: data.events });
        console.log(res.data);
    }; 
  
    render() {
      return (
        <View>
          <FlatList
            data={this.state.events}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index}) => {
                return (
                    <EventItem item={item} index={index}>

                    </EventItem>
                )
            }}
          />
        </View>
      );
    }
  }