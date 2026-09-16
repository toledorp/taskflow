import { Image, Pressable, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { router } from 'expo-router';
import Botao from '@/components/Botao';
import Caixa from '@/components/Caixa';
import Titulo from '@/components/Titulo';

export default function Home() {
    const [iniciado, setIniciado] = useState(false)

    function iniciarAplicacao() {
        setIniciado(true);
        router.push('/tarefas');
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

                    <Titulo texto="TaskFlow"/>

                    {iniciado ? (
                        <Text style={styles.descricao}>
                            Bem vindo as TaskFlow!
                        </Text>
                    ) : (
                        <Text style={styles.descricao}>
                            Organize sua tarefas de forma simples
                        </Text>
                    )}

                    {/* <Button title="Configurações" onPress={() => router.push('/configuracoes')} />
                    <Button title="Tarefas" onPress={() => router.push('/tarefas')} />
                     */}
                    <Botao
                        texto={iniciado ? "Continuar" : "Começar"}
                        onPress={iniciarAplicacao}
                    />


                </View>
            </View>
        </SafeAreaView>
    );
}