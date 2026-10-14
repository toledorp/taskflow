import api from "./api";

export async function listarTarefas() {
  const response = await api.get('/tarefas');
  return response.data;
}   

export async function criarTarefa(tarefa: any) {
  const response = await api.post('/tarefas', tarefa);
  return response.data;
}

export async function excluirTarefa(id: string) {
    await api.delete(`/tarefas/${id}`);
}