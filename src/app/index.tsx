import { Image, StyleSheet, Text, View } from "react-native";


export default function HomeScreen() {
  return (
    <View style={styles.container}>


      <Image style={styles.logo} source={require('../../assets/logo.png.jpg')} />

      

      <Text style={styles.titulo}>
        MasterCell
      </Text>

      <Text style={styles.descricao}>
        Seja muito bem-vindo à MasterCell!{"\n\n"}

        É um prazer ter você aqui! Prepare-se para conhecer novidades, {"\n\n"}
        compartilhar experiências e explorar tudo o que o mundo da tecnologia mobile tem a oferecer.{"\n\n"}

        Fique à vontade, aproveite o servidor e faça parte da nossa comunidade!
      </Text>

      <Text style={styles.autor}>
        Nosso servidor foi criado para reunir pessoas apaixonadas por tecnologia, celulares e inovação.

        Aqui você encontra novidades, dicas,{"\n\n"}informações sobre dispositivos móveis e um
        espaço para compartilhar experiências, trocar ideias e conhecer novas pessoas.

        Tecnologia, {"\n\n"}conexão e inovação em um só lugar!

        Entre, fique à vontade e faça parte da comunidade MasterCell!
      </Text>


    </View>

  );
}

const styles = StyleSheet.create({

  titulo: {
    fontSize: 50,
    color: '#90EE90',
    textAlign: 'center',
    fontFamily: 'Ariel',

  },

  descricao: {
    fontSize: 16,
    color: '#39FF14',
    textAlign: 'center',
  },

  autor: {
    fontSize: 13,
    color: '#00FF7F',
    textAlign: 'center',
    marginTop: 32,
  },

  container: {
    flex: 1,
    backgroundColor: '#006400',
    padding: 24,
  },

  logo: {
   width: 220,
  height: 200,
  borderRadius: 10,
  alignSelf: 'center',

  }

});
