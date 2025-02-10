import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '@/styles/styles'
import * as Speech from 'expo-speech';

const Voicebutton = ({tipo, numero}) => {

    const speak = () => {
        Speech.speak(tipo,
            {
                pitch: numero,
            }
        );
      };
      
  return (
    <View>
    <TouchableOpacity style={styles.button3} onPress={speak}>
      <Text style={styles.texto}>{tipo}</Text>
    </TouchableOpacity>
    </View>  

  )
}

export default Voicebutton