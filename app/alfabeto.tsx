import { Image, SafeAreaView, View} from "react-native";
import styles from "@/styles/styles";
import ButtonLetter from "@/components/ButtonLetter";
import Buttonalfa from "@/components/buttonalfa";
import { Stack, useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function Alfabeto() {

    const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  
  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} alt="logo inclusi+" style={styles.imagelogo}></Image>
      </View>

      <View style={styles.buttonlettersection}>
        <ButtonLetter
        texto="A"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>
        <ButtonLetter
        texto="B"
        color="#0044FF"
        color2="#0033BF"
  
        ></ButtonLetter>
        <ButtonLetter
        texto="C"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>
        <ButtonLetter
        texto="D"
        color="#0044FF"
        color2="#0033BF"
 
        ></ButtonLetter>
        <ButtonLetter
        texto="E"
        color="#0044FF"
        color2="#0033BF"

        ></ButtonLetter>
        <ButtonLetter
        texto="F"
        color="#0044FF"
        color2="#0033BF"
  
        ></ButtonLetter>
        <ButtonLetter
        texto="G"
        color="#0044FF"
        color2="#0033BF"

        ></ButtonLetter>
        <ButtonLetter
        texto="H"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="I"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="J"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="K"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="L"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="M"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="N"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="O"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="P"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="Q"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="R"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="S"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="T"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>
        
        <ButtonLetter
        texto="U"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="V"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="W"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="X"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="Y"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>

<ButtonLetter
        texto="Z"
        color="#0044FF"
        color2="#0033BF"
        ></ButtonLetter>
      </View>

      
    </SafeAreaView>
  );
}