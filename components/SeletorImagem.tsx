import { useState } from "react";
import * as ImagePicker from 'expo-image-picker'



type SeletorImagem = {
    onImagemSelecionada?: (uri: string | null) => void;
    imagemInicial?: string | null
    permiteCamera?: boolean
    permiteGaleria?: boolean
    permiteEdicao?: boolean
    aspect?: [number, number]

}
export default function SeletorImagem({
    onImagemSelecionada,
    imagemInicial = null,
    permiteCamera = true,
    permiteGaleria = true,
    permiteEdicao = true,
    aspect = [1,1]
}: SeletorImagem){
    const [image, setImage] = useState<string | null>(imagemInicial)

    function atualizarImagem(uri: string | null){
        setImage(uri)
        onImagemSelecionada?.(uri)
    }

    async function selecionarImagem() {
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['image'],
            allowsEditing: permiteEdicao,
            aspect,
            quality: 0.8
        })
        
        if(!resultado.canceled)
            atualizarImagem(resultado.assets[0].uri)
    }

    return(
        <View></View>
    )
}