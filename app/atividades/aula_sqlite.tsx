import Botao from "@/components/Botao"
import { criarTarefa, listarTarefas, Tarefa } from "@/services/tarefas_bd"
import { useSQLiteContext } from "expo-sqlite"
import { useEffect, useState } from "react"
import { TextInput, View } from "react-native"

export default function Home(){
    const db = useSQLiteContext()

    const [tarefas, seTarefas] = useState<Tarefa[]>([])
    const [titulo, setTitulo] = useState("")
    const [erro, setErro] = useState("")


    async function carregarTarefas(){
        try {
            const resultado = await listarTarefas(db)
            setTarefas(resultado)
        } catch (error) {
            setErro("Não foi possivel carregar as tarefas")
            
        }
    }

    useEffect(() => {
        void carregarTarefas()
    }, [])

    async function salvarTarefas(){
        const texto = titulo.trim()

        try {
            setErro("")
            await criarTarefa(db, texto)

            setTitulo("")

            await carregarTarefas()
        } catch (error) {
            Alert.alert("Erro", "Não foi possivel salvar a terefa")
        }
    }


    return(
        <View style={styles.container}>
            <Text>TaskFlow</Text>
            <Text>Organize suas tarefas localmente</Text>

            <View style={styles.formulario}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o titulo da tarefa"
                    value={titulo}
                    onChangeText={setTitulo}
                    maxLength={120}
                />

                <Botao 
                    texto="Salvar"
                    onPress={()=> void salvarTarefas()}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroudColor: "#dbdbdbff",
        paddingTop: 55,
        paddinHorizontal: 20,
    },
    formulario:{
        backgroudColor: #fff,
        boderRadius: 12,
        padding: 14,
        marginBotton: 22
    },
    input:{
        borderWidth: 1,
        borderColor: "#d1d5db",
        boderRadius: 8,
        padding: 12,
        marginBotton: 10,
        fontSize: 16
    }
})