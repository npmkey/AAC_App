import { Image, Text, TouchableOpacity, View, Alert} from 'react-native'
import styles from '@/styles/styles'
import * as Speech from 'expo-speech';


export default function Button({texto, color, color2, images}) {

    const speak = () => {
        Speech.speak(texto);
      };

    return (
      <View>
        <View style={styles.center}>
            
            <TouchableOpacity onPress={speak}>
                <View style={[styles.button, {backgroundColor: color2}]}>
                    <View style={[styles.buttonTop, {backgroundColor: color}]}>
                        <Image source={images} style={styles.image}></Image>
                    </View>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.texto}>{texto}</Text>
            </View>
        </View>
      </View>
    )
}

