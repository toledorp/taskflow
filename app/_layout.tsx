import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function Layout() {
  return (
    <SQLiteProvider
      databaseName="taskflow.db"
      onInit={async (db) => {
        await db.execAsync(`
              CREATE TABLE IF NOT EXISTS tarefas(
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              titulo TEXT NOT NULL,
              concluida INTEGER NOT NULL DEFAULT 0
              );
              `);
      }}
    >
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
    </SQLiteProvider>
  );
}
