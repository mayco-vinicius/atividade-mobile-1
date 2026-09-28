import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { Usuario } from './components/BoasVindas';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('')

  const [cidade, setCidade] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Perfil</Text>
      <Text style={styles.subtitulo}>Complete suas informações abaixo</Text>

      <Usuario nome={nome} setNome={setNome} />
      <Text>Bem vindo {nome} </Text>

      <TextInput 
      style={styles.input}
      placeholder='Cidade'
      onChangeText={setCidade}
      value={cidade}
      />

      <Button 
        title='Salvar Perfil'
        color='#18d115'
        onPress={() => Alert.alert('Perfil Salvo')}
      />

      <Image 
      style={styles.imagem}
        source={require('./assets/icon.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
  },

  subtitulo: {
    fontSize: 20,
  },

  input:{
    height: 40,
    width: "50%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
  },

  imagem: {
    marginTop: 10,
    width: 100,
    height: 100
  }
});
