import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import EventCard from '../Components/EventCard';
import eventAPI from '../apis/axios';

const Events = ({navigation}) => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEventsFromAPI();
    }, []);
    
    function getEventsFromAPI() {
        eventAPI.get('events')
        .then(function(res){
            setEvents(res.data);
            console.log(events);
        })
        .catch(function(err){
            console.log(err)
        })
    }

    if(!events) {
        return null;
    }

    return (
        <View>
            <FlatList data = {events.events}
                keyExtractor = {(item, index) => 'key' + index}
                renderItem = {({item}) => {
                    return(<EventCard item = {item}/>)
                }}
            />
        </View>
    )
}

export default Events;