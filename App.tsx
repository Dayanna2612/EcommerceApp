import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍 Ecommerce App</Text>
      <Text style={styles.subtitle}>Compra fácil, rápido y seguro</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a', // negro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff4da6', // rosado principal
  },
  subtitle: {
    fontSize: 16,
    color: '#a1a1aa', // gris suave
    marginTop: 10,
  },
});