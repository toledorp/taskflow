import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";


export default function Tarefas() {
    function voltarInicio() {
        router.dismissAll();
        router.push('/');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Tarefas</Text>
            <Button title="Configurações" onPress={() => router.push('/configuracoes')} />
            <Button title="Voltar" onPress={router.back} />
            <Button title="Voltar ao Início" onPress={voltarInicio} />    
        </View>
    )
}
