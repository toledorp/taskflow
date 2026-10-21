import { Image, Pressable, Text, View, Button, ActivityIndicator, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/styles/global'
import axios from 'axios'

type Posts = {
    id: string;
    title: string;
}

export default function Home() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregar() {
            try {
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                await new Promise(resolve => setTimeout(resolve, 1000));
                setPosts(res.data);
            } catch (erro) {
                setErro(true);
            }
            finally {
                setCarregando(false)
            }

        }

        carregar();
    }, []);

    if (erro) {
        return (
            <View style={styles.container}>
                <Text>Não foi possível carregar os dados.</Text>
            </View>
        );
    }


    if (carregando) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#E40613" />
                <Text>Carregando dados...</Text>
            </View>
        )
    } else {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>

                    <FlatList
                        data={posts}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={{ paddingBottom: 5 }}>{item.id} - {item.title}</Text>
                            </View>
                        )}
                    />
                </View>

            </SafeAreaView >
        );
    }
}