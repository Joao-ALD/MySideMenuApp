import 'react-native-gesture-handler';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* Aqui dizemos ao motor para usar o nosso visual personalizado */}
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>

          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Início',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Meu Perfil',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person-outline" size={size} color={color} />
              ),
            }}
          />

        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}