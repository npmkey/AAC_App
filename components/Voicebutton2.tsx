import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '@/styles/styles'
import * as Speech from 'expo-speech';

const Voicebutton2 = () => {

    const speak = () => {
        Speech.speak(
        );
      };
      
  return (
    <View>
    <TouchableOpacity style={styles.button3} onPress={speak} >
      <Text style={styles.texto}>falar</Text>
    </TouchableOpacity>
    </View>  

  )
}

export default Voicebutton2