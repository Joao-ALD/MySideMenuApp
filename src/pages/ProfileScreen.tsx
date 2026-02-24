import { styles } from '../styles/container.style';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Esta é a sua tela de Perfil 👤</Text>
        </View>
    );
}