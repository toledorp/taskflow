import Botao from "@/components/Botao";
import TarefaCard from "@/components/TarefaCard";
import { styles } from "@/styles/global";
import { carregarTarefas, carregarUsuario } from "@/util/armazenamento";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

type Tarefa = {
  id: string;
  titulo: string;
  descricao: string;
  prioridade: string;
};

type Usuario = {
  username: string;
}

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    async function carregar() {
      const dados = await carregarTarefas();
      const user = await carregarUsuario();
      setTarefas(dados);
      setUsuario(user); 
    }
    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30}}>seja bem vindo, {usuario?.username || ""}</Text>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <FlatList
        data={tarefas}
        contentContainerStyle={{ padding: 25 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <TarefaCard
              titulo={item.titulo}
              descricao={item.descricao}
              prioridade={item.prioridade}
            />
          </>
        )}
        ListEmptyComponent={<Text>Nenhuma tarefa na lista</Text>}
      />

      <Botao texto="Add +" onPress={() => router.push("/tarefas/addTarefas")} />
      <Botao texto="Configurações" onPress={() => router.push("/configuracoes")} />
    </View>
  );
}
