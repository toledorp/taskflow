import ItemProduto from "@/components/ItemProduto";
import { FlatList, Text, View } from "react-native";

const produtos = [
    {
        id: "1",
        nome: "teclado",
        preco: 120
    },
    {
        id: "2",
        nome: "Mouse",
        preco: 20
    },
    {
        id: "3",
        nome: "Monitor",
        preco: 800
    },
]

export default function Ex10() {
    return (
        <View>
            <FlatList
                data={produtos}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=> (
                    <ItemProduto
                        nome={item.nome}
                        preco={item.preco.toString()}
                    />
                )}  

            />
        </View>
    )
}