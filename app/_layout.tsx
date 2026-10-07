import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "TaskFlow" }} />
      <Stack.Screen name="catalogo" options={{ title: "Catálogo" }} />
      <Stack.Screen
        name="atividades/aula_13"
        options={{ title: "Aula 13 — Axios" }}
      />

      <Stack.Screen
        name="tarefas/tarefas"
        options={{ title: "Minhas Tarefas" }}
      />

      <Stack.Screen
        name="tarefas/addTarefas"
        options={{ title: "Adicionar Tarefas" }}
      />
    </Stack>
  );
}
