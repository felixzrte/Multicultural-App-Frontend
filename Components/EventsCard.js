import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const EventsCard = ({ event }) => {
    return (
        <View style = {styles.cardView}>
            <Text style = {styles.title}>{`${event.eventName}`}</Text>
            <Text style = {styles.author}>{`${event.clubName}`}</Text>
            <Text style = {styles.description}>{`${event.desc}`}</Text>
        </View>
    )
};

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
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'
    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18

    },
});

export default EventsCard;