import { Pressable, StyleSheet, Text } from "react-native";

interface BotaoProps {
    texto: string
    onPress: () => void
    cor?: string
}

export default function Botao({ texto, onPress, cor = '#2563EB' }: BotaoProps) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.botao,
                pressed && styles.botaoPressionado,
                {backgroundColor: cor}
            ]}
            onPress={onPress}
        >
            <Text style={styles.texto}>{texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10
    },
    texto: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    botaoPressionado: {
        opacity: 0.8
    }
})