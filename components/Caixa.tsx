import React, { Children } from "react";
import { StyleSheet, View } from "react-native";

interface CaixaProps{
    children: React.ReactNode
}

export default function Caixa({children}:CaixaProps){

    return(
        <View style={styles.caixa}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    caixa:{
        backgroundColor: '#ffcacaff',
        width: 200,
        height: 300
    }
})