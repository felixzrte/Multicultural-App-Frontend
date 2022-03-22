import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
      },
      headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      merchItemContainer: {
        backgroundColor: '#d3d3d3',
        marginBottom: 10,
        borderRadius: 10,
      },
      productItemContainer: {
        backgroundColor: '#d3d3d3',
        marginBottom: 10,
        borderRadius: 40,
        borderTopRightRadius:0,
        borderTopLeftRadius:0,
      },
      leftMargin: {
        marginLeft: 25,
      },
      center: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#4C9A2A',
      },
      descText: {
        fontSize: 14,
        letterSpacing: 0,
        color: 'black',
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
      },
      dText: {
        fontSize: 14,
        letterSpacing: 0,
        color: 'black',
        marginBottom: 15,
        marginTop: 15,
      },
      flatlistcontainer: {
        marginBottom: 10,
        borderRadius: 40,
        borderColor: 'black',
        backgroundColor: '#89CFF0',
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 15,

      },
      bottomText: {
        fontSize: 14,
        letterSpacing: 0,
        color: 'black',
        marginBottom: 15,
        marginTop: 15,
      },
      buttonText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      heading: {
        fontWeight: 'bold',
        color: 'white',
      },
      tinyLogo: {
        width: 350,
        height: 200,
      },
    });
  