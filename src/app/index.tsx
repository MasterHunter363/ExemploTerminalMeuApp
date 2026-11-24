import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Meu Primeiro Aplicativo
      </Text>

      <Text style={styles.descricao}>
        Desenvolvido com React Native
      </Text>

      <Text style={styles.autor}>
        curso tecnico em desenvolvimento de sistemas
      </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({

  titulo:{fontSize: 30,
    color:'red',
    textAlign:'center',

  },

  descricao:{
    fontSize: 16,
    color:'red',
    textAlign:'center',
  },

  autor:{
    fontSize: 13,
    color:'red',
    textAlign:'center',
    marginTop: 32,
  },

  container:{
    flex: 1,
    backgroundColor: '#220202',
    padding: 24,
  }

});
