import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

// 1. Nossa tela inicial original
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo à Tela Inicial!</Text>
    </View>
  );
}

// 2. NOVA TELA: Criamos o visual da tela de Perfil
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Esta é a sua tela de Perfil 👤</Text>
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator>
          {/* Tela 1 */}
          <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Início' }}
          />
          {/* 3. Tela 2: Perfil menu */}
          <Drawer.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'Meu Perfil' }}
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