import type { SQLiteDatabase } from "expo-sqlite";

export type Tarefa = {
    id: number;
    titulo: string;
    concluida: number;
}

// Create
export async function criarTarefa(db: SQLiteDatabase, titulo:string): Promise<void> {
    await db.runAsunc(
        "INSERT INTO tarefa (titulo) VALUES (?)",
        titulo
    )
}

//READ
export async function listarTarefas(db: SQLiteDatabase): Promise<tarefa[]>{
    return db.getAllAsync<Tarefa>(
        "SELECT * FROM tarefas ORDER BY id DESC"
    )
}

//UPDATE
export async function atualizarTitulo(db: SQLiteDatabase, id: number, titulo: string): Promise<void>{
    await db.runAsync(
        "UPDATE tarefas SET titulo = ? WHERE id = ?",
        titulo,
    
    )
}

//UPDATE
export async function atualizarConclusao(db: SQLiteDatabase, id: number, concluida: number): Promise<void>{
    await db.runAsync(
        "UPDATE tarefas SET concluida = ? WHERE id = ?",
        concluida,
        id
    )
}

//DELETE
export async function excluirTarefa(db: SQLiteDatabase, id: number): Promise<void>{
    await db.runAsync(
        "DELETE FRO tarefas WHERE ID = ?",
        id
    )
}