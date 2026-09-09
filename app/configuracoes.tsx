import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Configurações</Text>
      <Button title="Voltar" onPress={router.back} />
      <Button title="Tarefas" onPress={() => router.push("/tarefas")} />
      <Button title="Voltar ao Início" onPress={voltarInicio} />
    </View>
  );
}
