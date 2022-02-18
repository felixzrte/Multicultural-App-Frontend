/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Title,
  Caption,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { LinearGradient } from 'react-native-svg';
import Profile from './Profile';
import { initialWindowMetrics } from 'react-native-safe-area-context';


const DATA = [
  {id: 1, text: 'Name'},
  {id: 2, text: 'Email'},
  {id: 3, text: 'Password'},
]

const UpdateProfile = () => {
  const [data, setdata] = useState(DATA)
  const [isRender, setisRender] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [inputText, setinputText] = useState();
  const [editItem, seteditItem] = useState();

  const onPressItem = (item) => {
    setisModalVisible(true);
    setinputText(item.text)
    seteditItem(item.id)
  }
  

  const renderItem = ({item, index}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onPressItem(item)}
    >
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  )
  }

  const handleEditItem = (editItem) => {
    const newData = data.map(item => {
      if (item.id == editItem) {
        item.text = inputText;
        return item;
      }
      return item;
    })
    setdata(newData);
    setisRender(!isRender);
  }

  const onPressSaveEdit = () => {
    handleEditItem(editItem); //save input text to data
    setisModalVisible(false); // close modal
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
         <View style={styles.profileImage}>
            <Image
              source={require('../assets/images/mcc.png')}
              style={styles.image}
              resizeMode="center"
            />
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            extraData={isRender}
          />
          <Modal
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => setisModalVisible(false)}
          > 
            <View style={styles.modalView}>
              <Text style={styles.text}>
                Change Text: 
              </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setinputText(text)}
                defaultValue={inputText}
                editable={true}
                multiline={false}
                maxLength={100}

              />
            <TouchableOpacity
                onPress={() => onPressSaveEdit()}
                style={styles.touchableSave} >
                <Text style={styles.text}>
                  Save
                </Text>
              </TouchableOpacity>

            </View>

          </Modal>
          
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  

  text: {
    fontFamily: 'HelveticaNeue',
    color: 'black',
    alignItems:'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginVertical: 50,
  },
  userInfoSection:{
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  container: {
    flex: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'flex-start'
  },
  textInput:{
    width: '70%',
    height: 70,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 25
  },
  touchableSave:{
    backgroundColor: 'blue',
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 20
  },
  TouchableOpacity:{
    backgroundColor: 'blue',
    paddingHorizontal: 100,
    alignItems: 'center',
    marginTop: 20
  },
  modalView: {
    flex:1,
    alignItems: 'center',
  }
});
export default UpdateProfile;