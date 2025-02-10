import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    blue:{
        backgroundColor: 'blue'
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

    wrap:{
        backgroundColor: '#D3EBF6',
        flex:1,
        padding: 0,
    },

    contain:{
      paddingHorizontal: 40,
    },
    
    container: {
      alignItems: 'center',
    },

    center:{
        alignItems: 'center',
        gap: 10,
    },

    buttonsection:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap:40,
        padding:20,
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#0033BF',
        height: 70,
        width: 120,
        borderRadius: 30,
      },
  
        buttonTop: {
          height: 70,
          width: 120,
          borderRadius: 30,
          position: 'absolute',
          backgroundColor: '#a939b9',
          bottom: 8,
          alignItems: 'center',
        },

    logo: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },

    texto:{
        color: '#004C8A',
        fontWeight: 'bold',
        fontSize: 14,
    },

    image:{
        flex:1,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imagelogo:{
      height:80,
      width: 120,
    },

    avatar:{
      backgroundColor: 'pink',
      height: 60,
      width: 60,
      borderRadius: 30,
    },

    letrasgrande:{
      color: 'white',
      fontSize: 40,
    },

    buttonlettersection:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap:20,
      padding:10,
      justifyContent: 'center',
    },

    button2:{
      backgroundColor: '#0033BF',
        height: 40,
        width: 80,
        borderRadius: 30,

    },
    buttonTop2:{

      height: 40,
          width: 80,
          borderRadius: 30,
          position: 'absolute',
          backgroundColor: '#a939b9',
          bottom: 8,
          alignItems: 'center',
    },

    button3:{
      height: 40,
      width: 80,
      borderRadius: 30,
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
          alignItems: 'center',
    },
    spacebetween:{
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 0,
      paddingVertical: 50,
    },
  });

  export default styles;