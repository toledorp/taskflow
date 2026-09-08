import { Image, Pressable, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function Home() {
    const [iniciado, setIniciado] = useState(false)

    function iniciarAplicacao() {
        setIniciado(true);
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                    <Text style={styles.titulo}>TaskFlow</Text>

                    {iniciado ? (
                        <Text style={styles.descricao}>
                            Bem vindo as TaskFlow!
                        </Text>
                    ) : (
                        <Text style={styles.descricao}>
                            Organize sua tarefas de forma simples
                        </Text>
                    )}


                    <Pressable
                        onPress={iniciarAplicacao}
                        style={({ pressed }) => [styles.botao,
                        pressed && styles.botaoPressionado
                        ]}
                    >


                        <Text style={styles.textoBotao}>
                            {iniciado ? "Continuar" : "Começar"}
                        </Text>


                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}