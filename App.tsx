import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Importação necessária para o Android funcionar
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// CORREÇÃO 1: Criar o Drawer fora da função App
const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo à Tela Inicial!</Text>
    </View>
  );
}

export default function App() {
  return (
    // CORREÇÃO 2: Envolver tudo com o GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Início' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});