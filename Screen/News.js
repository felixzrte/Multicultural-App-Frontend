import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import NewsCard from '../Components/NewsCard';
import newsAPI from '../apis/News';

const News = ({navigation}) => {

    const [news, setNews] = useState([]);

    useEffect(() => { // when update state, update response 
        getNewsFromAPI();
    },[])

    // const newsResponse = async () => {
    //     const response = await newsAPI.get('top-headlines?country=us&apiKey=8ce29677976a4e258c293bb3e448e81a')
    //     console.log(response.data)
    // }

    function getNewsFromAPI() {
        newsAPI.get('top-headlines?country=us&apiKey=8ce29677976a4e258c293bb3e448e81a')
        .then(function(response){
            setNews(response.data );
        })
        .catch(function(error){
            console.log(error)
        })
    }

    if (!news) {
        return null;
    };

    return (
        <View>
            <FlatList data = {news.articles}
                keyExtractor = {(item, index) => 'key' + index}
                renderItem = {({item}) => {
                    return (<NewsCard item = {item}/>)
                }} 
            />
        </View>
    )
};

export default News;