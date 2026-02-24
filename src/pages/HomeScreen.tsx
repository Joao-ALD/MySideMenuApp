import { styles } from '../styles/container.style';
import { View, Text } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Bem-vindo à Tela Inicial!</Text>
        </View>
    );
}