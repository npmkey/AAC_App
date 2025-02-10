import { Image, Text, TouchableOpacity, View} from 'react-native'
import styles from '@/styles/styles'
import { router, useRouter } from 'expo-router';
import { Stack } from 'expo-router/stack';


export default function Button({texto, color, color2, images}) {

    const router = useRouter();

    return (  
      <View>
        <View style={styles.center}>
            
            <TouchableOpacity onPress={() =>  router.push('/alfabeto')}>
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

