import React, { Children } from "react";
import { StyleSheet, View } from "react-native";

interface CardProps{
    children: React.ReactNode
}

export default function Card({children}:CardProps){

    return(
        <View style={styles.card}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#ffffff',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center'
    },
})