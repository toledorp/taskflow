import ItemProduto from "@/components/ItemProduto";
import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Produto {
  _id: string;
  nome: string;
  preco: number;
}

const moeda = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function Catalogo() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function carregarProdutos() {
      setCarregando(true);
      setErro("");

      try {
        const resposta = await axios.get<Produto[]>(
          "http://68.211.112.101:3000/produtos",
          { signal: controller.signal, timeout: 15000 },
        );

        // Confere o formato antes de enviar os dados para a FlatList.
        if (!Array.isArray(resposta.data) || !resposta.data.every((produto) =>
          produto && typeof produto._id === "string" &&
          typeof produto.nome === "string" &&
          typeof produto.preco === "number" && Number.isFinite(produto.preco)
        )) {
          throw new Error("Formato de produtos inválido.");
        }

        if (!controller.signal.aborted) setProdutos(resposta.data);
      } catch (error) {
        if (controller.signal.aborted) return;

        if (isAxiosError(error)) {
          setErro(error.response
            ? `O servidor não conseguiu carregar os produtos (HTTP ${error.response.status}). Tente recarregar.`
            : "Não foi possível conectar à API. Verifique sua conexão e tente recarregar.");
        } else {
          setErro("A API retornou dados em um formato inesperado. Tente recarregar.");
        }
      } finally {
        if (!controller.signal.aborted) setCarregando(false);
      }
    }

    carregarProdutos();
    return () => controller.abort();
  }, [tentativa]);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom", "left", "right"]}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Catálogo de produtos</Text>
        <Text style={styles.descricao}>Confira os produtos disponíveis.</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ disabled: carregando }}
          disabled={carregando}
          onPress={() => setTentativa((valor) => valor + 1)}
          style={({ pressed }) => [styles.botao, (pressed || carregando) && styles.botaoDesativado]}
        >
          <Text style={styles.textoBotao}>{carregando ? "Carregando..." : "Recarregar lista"}</Text>
        </Pressable>
      </View>

      {carregando ? (
        <View style={styles.mensagem}>
          <ActivityIndicator size="large" color="#2563EB" />
          <Text style={styles.descricao}>Buscando produtos...</Text>
        </View>
      ) : erro ? (
        <View style={styles.mensagem}>
          <Text style={styles.erro} accessibilityRole="alert">{erro}</Text>
        </View>
      ) : (
        <FlatList
          data={produtos}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.lista}
          ListHeaderComponent={<Text style={styles.quantidade}>Produtos encontrados: {produtos.length}</Text>}
          ListEmptyComponent={<Text style={styles.descricao}>Nenhum produto disponível.</Text>}
          renderItem={({ item }) => (
            <View style={styles.produto}>
              <ItemProduto nome={item.nome} preco={moeda.format(item.preco)} />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#f3f3f3" },
  cabecalho: { padding: 20, gap: 12 },
  titulo: { fontSize: 26, fontWeight: "bold", color: "#2563EB" },
  descricao: { fontSize: 16, color: "#555", lineHeight: 24 },
  botao: { backgroundColor: "#2563EB", padding: 14, borderRadius: 10, alignItems: "center" },
  botaoDesativado: { opacity: 0.6 },
  textoBotao: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  mensagem: { flex: 1, padding: 20, justifyContent: "center", alignItems: "center", gap: 16 },
  erro: { color: "#b91c1c", fontSize: 16, textAlign: "center", lineHeight: 24 },
  lista: { paddingHorizontal: 20, paddingBottom: 20, gap: 12 },
  quantidade: { fontSize: 16, fontWeight: "bold", color: "#333", marginBottom: 4 },
  produto: { backgroundColor: "#fff", padding: 20, borderRadius: 12 },
});
