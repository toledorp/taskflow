import Botao from "@/components/Botao"
import TarefaCard from "@/components/TarefaCard";
import { router } from "expo-router";
import { FlatList } from "react-native";
import { styles } from "../styles";

const estoque = [
    {
    id: "1",
    titulo: "Teclado",
    valor: 120
  },
  {
    id: "2",
    titulo: "Mouse",           
    valor: 80,
  },
  {
    id: "3",
    titulo: "Monitor",
    valor: 900,
  },
]

export default function Tarefa(){
    function voltarinicio() {
        router.dismissAll();
        router.push("/")

    }
}