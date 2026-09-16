import { StyleSheet, View } from "react-native";


export default function Caixa({children}:any){
    return(
        <View style={styles.caixa}>
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
    }
})
