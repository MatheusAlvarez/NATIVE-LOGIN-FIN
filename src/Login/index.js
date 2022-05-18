import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Vibration } from 'react-native';
import styles from './style.js'


function Login({ navigation }) {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");

    function validacao(){
        if(login == "" || senha == ""){
            setMessage("Preencha todos os campos para continuar")
            Vibration.vibrate();
        }
        else if(login != "Matheus"){
            setMessage("Usuário inválido")
            Vibration.vibrate();
        }
        else if(senha != "123"){
            setMessage("Senha inválida")
            Vibration.vibrate();
        }
        else{
            navigation.navigate("Home")
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="cyan" barStyle="dark-content"/>
            <Text style={styles.title} >L O G I N</Text>

            <TextInput style={styles.input} onChangeText={setLogin} placeholder=' Usuário'/>

            <TextInput style={styles.input} onChangeText={setSenha} placeholder=' Senha'/>

            <Text style={styles.txtMsg} >{message}</Text>

            <TouchableOpacity style={styles.btn} title="Cadastro" onPress={() => validacao()}>
                <Text style={styles.txtBtn}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.viewConta}>
                <Text style={styles.txtConta}>Não tem uma conta?</Text>
                <Text style={styles.txtLink} onPress={() => navigation.navigate('Cadastro')}>Criar</Text>
            </View>
        </View>
    );
}

export default Login;