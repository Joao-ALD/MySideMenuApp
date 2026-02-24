import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// O (props) recebe todas as rotas e configurações do Drawer automaticamente
export default function CustomDrawer(props: any) {
    return (
        <View style={{ flex: 1 }}>
            {/* PARTE SUPERIOR (Rola com o ecrã) */}
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#fff' }}>
                {/* 1. O NOSSO CABEÇALHO PERSONALIZADO */}
                <View style={styles.header}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>João Silva</Text>
                    <Text style={styles.email}>joao@email.com</Text>
                </View>

                {/* 2. A LISTA DE BOTÕES PADRÃO (Início, Perfil, etc) */}
                <View style={styles.list}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            {/* PARTE INFERIOR (Rodapé Fixo) */}
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.logoutButton}
                    onPress={() => alert('Sair')}
                >
                    <Ionicons name="exit-outline" size={22} color="#d32f2f" />
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginBottom: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: 'gray',
    },
    list: {
        paddingHorizontal: 10,
    },
    footer: {
        padding: 20,
        marginBottom: 25, // margem inferior para evitar a sobreposição com a parte inferior dos botões do celular
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        backgroundColor: '#fff',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    logoutText: {
        fontSize: 16,
        color: '#d32f2f',
        fontWeight: '500',
    }
});