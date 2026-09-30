import AsyncStorage from "@react-native-async-storage/async-storage";


const CHAVE_TAREFAS = "@taskflow:tarefas";
const CHAVE_USER = "@taskflow:user";


export async function salvarTarefas(tarefas: any[]){
    try {
        const dados = JSON.stringify(tarefas);
        await AsyncStorage.setItem(CHAVE_TAREFAS, dados);
    } catch (error) {
        console.log ("Erro ao salvar as tarefas", error)
    }
}

export async function salvarUsuario(user: any){
    try {
        const dados = JSON.stringify(user);
        await AsyncStorage.setItem(CHAVE_USER, dados);
    } catch (error) {
        console.log ("Erro ao salvar as usuario", error)
    }
}

export async function carregarTarefas() {
    try {
        const dados = await AsyncStorage.getItem(CHAVE_TAREFAS);
        if(!dados){
            return[]
        }
        return JSON.parse(dados);
    } catch (error) {
        console.error("Erro ao carregar as ratefas", error)
    }
}

export async function carregarUsuario() {
    try {
        const dados = await AsyncStorage.getItem(CHAVE_USER);
        if(!dados){
            return[]
        }
        return JSON.parse(dados);
    } catch (error) {
        console.error("Erro ao carregar o usuário", error)
    }
}

export async function limparTerefas(){
    try {
        await AsyncStorage.removeItem(CHAVE_TAREFAS);
    } catch (error) {
        console.error("Erro ao limpar as tarefas: ", error)
    }
}