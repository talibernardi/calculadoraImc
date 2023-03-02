import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){
    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState(null)
    const [imc, setImc]= useState(null)
    const [textButtton, setTextButton]= useState("calcular")
    
    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Limpar campos")
            return
        }
        setImc(null)
        setTextButton("Calcular")
    }

    return(
     <View style={styles.formContext}>
        <View style={styles.form}>
        <Text style={styles.textImc}>Calculadora de Imc</Text>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Altura (m)"
            keyboardType="numeric"
            />
            <Text style={styles.formLabel}>Peso</Text>
            <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Peso (Kg)"
            keyboardType="numeric"
            />
            <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => {
                validationImc()
            }}
            >
                <Text style={styles.textbuttonCalculator}>{textButtton}</Text>
            </TouchableOpacity>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
     </View>
    );
} 