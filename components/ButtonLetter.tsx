import { Image, Text, TouchableOpacity, View, Alert} from 'react-native'
import styles from '@/styles/styles'
import * as Speech from 'expo-speech';


export default function Button({texto, color, color2,}) {

    const speak = () => {
        Speech.speak(texto);
      };

    return (
      <View>
        <View style={styles.center}>
            
            <TouchableOpacity onPress={speak}>
                <View style={[styles.button2, {backgroundColor: color2}]}>
                    <View style={[styles.buttonTop2, {backgroundColor: color}]}>
                        <Text style={styles.letrasgrande}>{texto}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
        </View>
      </View>
    )
}

