import { StyleSheet, View } from "react-native";


export default function Caixa({children}:any){
    return(
        <View style={styles.caixa}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    caixa:{
        backgroundColor: "#ffcacaff",
        width: 200,
        height: 300
    }
})
