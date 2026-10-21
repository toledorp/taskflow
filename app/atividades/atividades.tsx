import Botao from "@/components/Botao";
import { router } from "expo-router";
import { View, StyleSheet } from "react-native";

const exercicios = [
    {
        nome: "Ex da Aula 10",
        rota: "/atividades/ex_aula10"
    },
    {
        nome: "Ex fetch",
        rota: "/atividades/ex_fetch"
    },
    {
        nome: "Ex axios",
        rota: "/atividades/ex_axios"
    }
] as const;;

export default function Atividades() {
    return (
        <View style={styles.container}>
            {exercicios.map((exercicio) => (
                <Botao
                    key={exercicio.rota}
                    texto={exercicio.nome}
                    onPress={() => router.push(exercicio.rota)}
                />
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        padding: 10
    }
})