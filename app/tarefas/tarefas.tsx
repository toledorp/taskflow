import Botao from "@/components/Botao";
import TarefaCard from "@/components/TarefaCard";
import  { excluirTarefa, listarTarefas } from "@/services/tarefas";
import { styles } from "@/styles/global";
import { carregarUsuario } from "@/util/armazenamento";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, View } from "react-native";

type Tarefa = {
  _id: string;
  titulo: string;
  descricao: string;
  prioridade: string;
  concluida: boolean;
};

type Usuario = {
  username: string;
}

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  async function excluir(id: string) {
    Alert.alert(
      "Excluir tarefa",
      "Tem certeza que deseja excluir esta tarefa?",
      [
        {
          text: "Cancelar",
          style: "cancel", 
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await excluirTarefa(id);
  
              const tarefasAtualizadas = await listarTarefas();
              setTarefas(tarefasAtualizadas);
              
            } catch (error) {
              Alert.alert("Erro", "Ocorreu um erro ao excluir a tarefa.");
              console.error("Erro ao excluir tarefa:", error);
            }
          }
        },
      ]
    );
  }
  
  useEffect(() => {
    async function carregar() {
      try {
        const dados = await listarTarefas();
        setTarefas(dados);
        
      } catch (error) {
        console.error("Erro ao listar tarefas:", error);
        setErro(true);
      }finally {
        setCarregando(false);
      }
      const user = await carregarUsuario();
      setUsuario(user); 
    }
    carregar();
  }, []);

  if (carregando) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={50} />
      </View>
    )
  }if (erro) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Erro ao buscar as tarefas</Text>
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30}}>seja bem vindo, {usuario?.username || ""}</Text>
        <Text style={styles.titulo}>Minhas Tarefas</Text>
        <FlatList
          data={tarefas}
          contentContainerStyle={{ padding: 25 }}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <>
              <TarefaCard
                titulo={item.titulo}
                descricao={item.descricao}
                prioridade={item.prioridade}
                concluida={item.concluida}
                excluirTarefa={() => excluir(item._id)}
                atualizarTarefa={()=>
                  router.push({
                    pathname:"/tarefas/addTarefas",
                    params:{id: item._id}
                  })
                }
              />
            </>
          )}
          ListEmptyComponent={<Text>Nenhuma tarefa na lista</Text>}
        />

        <Botao texto="Add +" onPress={() => router.push("/tarefas/addTarefas")} />
        <Botao texto="Configurações" onPress={() => router.push("/configuracoes")} />
      </View>
    )
  }
}
   