import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Botao from "@/components/Botao";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Aula13() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [tentativa, setTentativa] = useState(0);

  // Busca os posts ao abrir a tela e ao tentar novamente.
  useEffect(() => {
    const controller = new AbortController();

    async function buscarPosts() {
      setCarregando(true);
      setErro("");

      try {
        const resposta = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: controller.signal, timeout: 15000 },
        );
        // O Axios já converte a resposta JSON: os dados ficam em data.
        if (!controller.signal.aborted) setPosts(resposta.data);
      } catch {
        if (!controller.signal.aborted) {
          setErro("Não foi possível carregar os posts. Verifique sua conexão e tente novamente.");
        }
      } finally {
        if (!controller.signal.aborted) setCarregando(false);
      }
    }

    buscarPosts();
    return () => controller.abort();
  }, [tentativa]);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom", "left", "right"]}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Posts do JSONPlaceholder</Text>
        <Text style={styles.descricao}>Atividade da aula 13 · Consumo de API com Axios</Text>
      </View>

      {carregando ? (
        <View style={styles.mensagem}>
          <ActivityIndicator size="large" color="#2563EB" />
          <Text style={styles.descricao}>Carregando posts...</Text>
        </View>
      ) : erro ? (
        <View style={styles.mensagem}>
          <Text style={styles.erro} accessibilityRole="alert">{erro}</Text>
          <Botao texto="Tentar novamente" onPress={() => setTentativa((valor) => valor + 1)} />
        </View>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.lista}
          ListHeaderComponent={<Text style={styles.quantidade}>Quantidade de posts: {posts.length}</Text>}
          ListEmptyComponent={<Text style={styles.descricao}>Nenhum post encontrado.</Text>}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <Text style={styles.numero}>Post {item.id}</Text>
              <Text style={styles.tituloPost}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#f3f3f3" },
  cabecalho: { padding: 20, gap: 8 },
  titulo: { fontSize: 24, fontWeight: "bold", color: "#2563EB" },
  descricao: { fontSize: 16, color: "#555", lineHeight: 24 },
  mensagem: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, gap: 16 },
  erro: { fontSize: 16, color: "#b91c1c", textAlign: "center", lineHeight: 24 },
  lista: { paddingHorizontal: 20, paddingBottom: 20, gap: 12 },
  quantidade: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 4 },
  post: { backgroundColor: "#fff", padding: 16, borderRadius: 12, gap: 8 },
  numero: { fontSize: 14, color: "#555" },
  tituloPost: { fontSize: 18, fontWeight: "600", color: "#222", lineHeight: 26 },
});
