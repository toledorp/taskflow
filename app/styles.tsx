import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea:{
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        padding: 20
    },
    titulo:{
        fontSize: 34,
        fontWeight: "bold",
        color: '#2c61b6ff',
        marginBottom: 10
    },
    descricao:{
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
        lineHeight: 26,
        color: '#555'
    },
    logo:{
        width: 140,
        height: 140,
        marginBottom: 20
    }, 
    card:{
        backgroundColor: '#ffffff',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center'
    },
    botao:{
        backgroundColor: '#2563EB',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10
    },

});

