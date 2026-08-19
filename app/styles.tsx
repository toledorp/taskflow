import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea:{
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo:{
        fontSize: 32,
        fontWeight: "bold",
        color: '#2c61b6ff'
    },
    descricao:{
        fontSize: 18,
        textAlign: "center",
        marginTop: 15
    },
    logo:{
        width: 140,
        height: 140,
    }
});