import Botao from "@/components/Botao";
import TarefaCard from "@/components/TarefaCard";
import { router } from "expo-router";
import { FlatList, SectionList, Text, View } from "react-native";
import { styles } from "./styles";

const tarefas = [
  {
    id: "1",
    titulo: "Estudar React Native",
    concluida: false,
    prioridade: "Alta",
  },
  {
    id: "2",
    titulo: "Entregar trabalho de Estatistica",
    concluida: false,
    prioridade: "Alta",
  },
  {
    id: "3",
    titulo: "Concluir curso das Academys",
    concluida: true,
    prioridade: "Media",
  },
];

const tarefas2 = [
  {
    title: "Pendentes",
    data: [
      "Estudar React native", "Entregar tarefa de PDW"
    ]
  },
    {
    title: "Concluidas",
    data: [
      "Entregar tarefa de Estatistica"
    ]
  },
]

const secoes = [
  {
    title: "Pendentes",
    data: tarefas.filter(tarefas => !tarefas.concluida)
  },
    {
    title: "Concluidas",
    data: tarefas.filter(tarefas => tarefas.concluida)
  },
]

export default function Tarefas() {
  function voltarInicio() {
    router.dismissAll();
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      {/* <FlatList
        data={tarefas}
        contentContainerStyle={{ padding: 25 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          !item.concluida ? (
            <>
              <TarefaCard
                titulo={item.titulo}
                descricao=""
                prioridade={item.prioridade}
              />
              <Text>{item.concluida ? "Concluida" : "Pendente"}</Text>
            </>
          ) : null
        }
        ListEmptyComponent={<Text>Nenhuma tarefa na lista</Text>}
      /> */}

      <SectionList 
          sections={secoes}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> (
              <TarefaCard
                    titulo={item.titulo}
                    descricao=""
                    prioridade={item.prioridade}
              />
          )}

          renderSectionHeader={({section}) => (
            <Text style={
              {fontSize: 30,
              fontWeight: 'bold'}
          }>{section.title}</Text>
          )}
      
      />

      <Botao texto="Voltar" onPress={router.back} />
    </View>
  );
}
