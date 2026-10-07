import { Image, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/styles/global';
import { router } from 'expo-router';
import Botao from '@/components/Botao';
import Titulo from '@/components/Titulo';
import Card from '@/components/Card';

export default function Home() {
    const [iniciado, setIniciado] = useState(false)

    function iniciarAplicacao() {
        setIniciado(true);
        router.push("/tarefas/tarefas");
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Card>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                    
                    <Titulo texto='TaskFlow'/>

                    {iniciado ? (
                        <Text style={styles.descricao}>
                            Bem vindo as TaskFlow!
                        </Text>
                    ) : (
                        <Text style={styles.descricao}>
                            Organize sua tarefas de forma simples
                        </Text>
                    )}
                    

                    <Botao
                        texto={iniciado ? "Continuar" : "Começar"}
                        onPress={iniciarAplicacao}
                    />
                    <View style={{ marginTop: 16 }}>
                        <Botao
                            texto="Atividade 13 - Axios"
                            onPress={() => router.push("./atividades/aula_13")}
                        />
                    </View>

                    <View style={{ marginTop: 16 }}>
                        <Botao
                            texto="Catálogo de produtos"
                            onPress={() => router.push("./catalogo")}
                        />
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
}

