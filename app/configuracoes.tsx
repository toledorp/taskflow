import { View, Text, Button } from 'react-native'
import { styles } from './styles'
import { router } from 'expo-router'
import Botao from '@/components/Botao'

export default function Configuracoes() {

    return (
        <View style={styles.container}>
            <Text style={styles.descricao}>Tela de Configurações</Text>
            <Botao
                texto='Voltar'
                onPress={router.back}
            />

            <Botao
                texto='Tarefas'
                onPress={() => router.push("/tarefas")}
            />
        </View>
    )
}