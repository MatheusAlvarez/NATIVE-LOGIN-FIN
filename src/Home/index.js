import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './style'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >H O M E</Text>

      <View style={styles.viewConta}>
            <Text style={styles.txtConta}>Deseja</Text>
            <Text style={styles.txtLink} onPress={() => navigation.navigate('Login')}>sair?</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;