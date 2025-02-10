import { Image, SafeAreaView, View} from "react-native";
import styles from "@/styles/styles";
import Button from "@/components/Button";
import Buttonalfa from "@/components/buttonalfa";
import { Stack, Tabs, Link } from 'expo-router';

export default function Tab() {
  
  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} alt="logo inclusi+" style={styles.imagelogo}></Image>
      </View>

      <View style={styles.buttonsection}>
        <Button
        texto="Água"
        color="#0044FF"
        color2="#0033BF"
        images={require('../../assets/images/1.png')}
        ></Button>

        <Button
        texto="banheiro"
        color="#FFB700"
        color2="#BF8900"
        images={require('../../assets/images/2.png')}
        ></Button>

        <Button
        texto="Lanche"
        color="#00FF17"
        color2="#00BF11"
        images={require('../../assets/images/4.png')}
        ></Button>

        <Button
        texto="Atividade"
        color="#0044FF"
        color2="#0033BF"
        images={require('../../assets/images/5.png')}
        ></Button>

        <Button
        texto="Lavar as Mãos"
        color="#0044FF"
        color2="#0033BF"
        images={require('../../assets/images/3.png')}
        ></Button>

        <Button
        texto="Saída"
        color="#FF0056"
        color2="#BF0040"
        images={require('../../assets/images/6.png')}
        ></Button>

        <Button
        texto="Brincar"
        color="#00FF17"
        color2="#00BF11"
        images={require('../../assets/images/7.png')}
        ></Button>

        <Buttonalfa
        texto="Letras"
        color="#00FF17"
        color2="#00BF11"
        images={require('../../assets/images/abc.png')}
        />
      </View>
    </SafeAreaView>
  );
}