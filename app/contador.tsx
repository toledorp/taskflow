import { Image, Pressable, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function Home() {
    const [contador, setContador] = useState(0)
    const [iniciado, setIniciado] = useState(false)

    useEffect(() => {
        console.log("Contador alterado:", contador);
    }, [contador]);
    
    useEffect(() => {
        setTimeout(()=>{
            setIniciado(true)
        },2000);
    }, []);


    function incrementar() {
        setContador(contador + 1)
    }

    function decrementar() {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {iniciado ? (
                    <View style={styles.card}>
                    <Text>CONTADOR</Text>
                    <Text style={{ fontSize: 25 }}>{contador}</Text>

                    <Button
                        title='+'
                        onPress={incrementar}
                    />
                    <Button
                        title='----'
                        onPress={decrementar}
                    />
                </View>
                ) : (
                    <View style={styles.card}>
                    <Text>Carregando Dados</Text>
            
                </View>
                )}
                
            </View>
        </SafeAreaView>
    );
}

