import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import EventsCard from '../Components/EventsCard';
import eventsAPI from '../apis/Events';

const Events = ({navigation}) => {

    const [events, setEvents] = useState([]);

    useEffect(() => { // when update state, update response 
        getEventsFromAPI();
    },[])

    function getEventsFromAPI() {
        eventsAPI.get('events')
        .then(function(response){
            setEvents(response.data);
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error)
        })
    }

    if (!events) {
        return null;
    };

    return (
        <View>
            <FlatList data = {events.events}
                keyExtractor = {(item, index) => index.toString()}
                renderItem = {({item}) => {
                    return (<EventsCard item = {item}/>)
                }} 
            />
        </View>
    )
};

export default Events;