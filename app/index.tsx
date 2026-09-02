import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useState } from 'react';


export default function Home() {
    function iniciarAplicacao() {
        console.log("O botão foi pressionado!")
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

                    <Text style={styles.descricao}>
                        Organize sua tarefas de forma simples
                    </Text>

                    <Pressable
                        onPress={iniciarAplicacao}
                        style={({ pressed }) => [styles.botao,
                        pressed && styles.botaoPressionado
                        ]}
                    >

                        {({ pressed }) => (
                            <Text style={styles.textoBotao}>
                                {pressed ? "Carregando" : "Iniciar"}
                            </Text>
                        )}

                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}