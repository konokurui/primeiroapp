import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>
      <Text style= {estilo.titulo}>jogos aiaiaiia</Text>
      <Text style= {estilo.jogo}>sluffy sola</Text>
      <StatusBar style="auto" />
<ScrollView>
      <Image style={estilo.img} source={require("./assets/mini.jpg")}/>
      <Text style= {estilo.jogo2}>metal gear</Text>
      <Image style={estilo.img} source={require("./assets/gear.jpg")}/>
      </ScrollView>
    </View>
   
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:"green",
   
  },

  titulo:{
    fontSize:40,
    marginTop:20,
    color: "red",
   
  },

  img:{
    width: 350,
    height: 300,
  },

  jogo:{
    marginTop:40,
    fontSize:30,
    marginBottom:34,
  },

  jogo2:{
    marginTop:40,
    fontSize:30,
    marginBottom:34,
    borderColor:"yellow",
  }

});
