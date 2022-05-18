import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './style'

function Cadastro({ navigation }) {

    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title} >C A D A S T R O</Text>

      {/* <TextInput placeholder="Ex: 5" onChangeText={setN1}/> */}
      <TextInput style={styles.input} placeholder=' Usuário'/>
      <TextInput style={styles.input} placeholder=' Senha' secureTextEntry={true}/>

      <TouchableOpacity style={styles.btn} title="Cadastro" onPress={() => navigation.navigate('Cadastro')} >
        <Text style={styles.txtBtn}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.viewConta}>
            <Text style={styles.txtConta}>Já tem uma conta?</Text>
            <Text style={styles.txtLink} onPress={() => navigation.navigate('Login')}>Entrar</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default Cadastro;