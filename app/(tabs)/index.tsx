import { View, SafeAreaView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from "@/styles/styles";
import { useRouter } from 'expo-router';
import Voicebutton from '@/components/Voicebutton';
import { useState } from 'react';
import * as Speech from 'expo-speech';

export default function Tab() {
  const [inputValue, setInputValue] = useState(''); // State for TextInput value
  const router = useRouter();

  const speak = () => {
    Speech.speak(inputValue);
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.imagelogo}
        />
      </View>

      <View style={styles.contain}>
        <Text style={styles.texto}>Escolha sua voz</Text>
        <View style={styles.spacebetween}>
          <Voicebutton tipo="fino" numero={2} />
          <Voicebutton tipo="médio" numero={1} />
          <Voicebutton tipo="grosso" numero={0.1} />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Digite aqui"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <TouchableOpacity style={styles.button3} onPress={speak}>
            <Text style={styles.texto}>Falar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
