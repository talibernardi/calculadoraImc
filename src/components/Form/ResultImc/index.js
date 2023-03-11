import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Share
} from "react-native"
import React from "react"


export default function ResultImc(props) {
 const onShare = async () => {
    const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc,
    })
}

return (
     <View style={styles.resultImc}>
        <View style={styles.boxShareButton}>
            <View style={styles.containerResult}>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            </View>
        <TouchableOpacity
           onPress={onShare}
           style={styles.shared}
        >
       <Text style={styles.sharedText}>Share</Text>
       </TouchableOpacity>
       </View>
     </View>
    );
}

const styles = StyleSheet.create({
    numberImc: {
        paddingVertical:3,
        fontSize: 48,
        color: '#2E384D',
        fontWeight: 'bold',
    },
    boxShareButton: {
        alignItems: 'center',
        marginBottom: 10,
    },
    shared: {
        backgroundColor: "#6CCB94",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: 'bold',
        paddingHorizontal: 30,
    },
    containerResult:{
        alignItems: 'center',
        borderRadius: 7,
        width:"90%",
        height:"70%",
        backgroundColor: "#F2F3F5",
        marginBottom: 5,
    },
    resultImc:{
        width: "100%",
        height: "32%",
    },
})