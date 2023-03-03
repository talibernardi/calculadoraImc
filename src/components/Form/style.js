import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textImc:{
        textAlign:'center',
        fontWeight: 'bold',
        color:"#0D114F",
        fontSize: 30,
    },
    description:{
        paddingTop: 20,
        color: "#A1B2CD",
        textAlign: 'center',
        paddingBottom: 30,
    },
    formContext: {
        width:"90%",
        height:"80%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        marginTop:30,
        marginLeft: 20,
        borderRadius: 8,
    },
    form: {
        width:"100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        marginLeft: 0,
        width:"48%",
        borderRadius:10,
        borderWidth:2,
        borderColor: "#A1B2CD",
        height: 60,
        margin: 12,
        paddingLeft: 10,
    },
    inputGrid: {
        flexDirection:'row',
    },
    buttonCalculator:{
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "#6CCB94",
        justifyContent:"center",
        width:"90%",
        paddingBottom: 14,
        paddingTop: 14,
        marginLeft:12,
        margin: 30,
    },
    textbuttonCalculator:{
        fontSize: 20,
        color: "#ffffff"
    },
});

export default styles