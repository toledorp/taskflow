import { useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';


export default function Home() {
    const [estaComecando, setEstaComecando] = useState(false);

    function iniciarAplicacao(){
        console.log("O botao foi precionado!")
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
                        Organize sua tarefa de frma simples
                    </Text>
                    <Pressable 
                        onPress={iniciarAplicacao}
                        onPressIn={() => setEstaComecando(true)}
                        onPressOut={() => setEstaComecando(false)}
                        style={({pressed}) => [
                            styles.botao,
                            pressed && styles.botaoPressionado]
                        }
                    >
                        <Text style={styles.textoBotao}>
                            {estaComecando ? 'Carregando...' : 'Iniciar'}
                        </Text>
                    </Pressable>

                </View>
            </View>
        </SafeAreaView>
    );
};


