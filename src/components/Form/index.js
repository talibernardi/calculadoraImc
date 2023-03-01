import React, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc";

export default function Form(){
    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState("preencha peso e altura")
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
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }

    return(
     <View>
        <View>
            <Text>Altura</Text>
            <TextInput
            onChangeText={setHeight}
            value={height}
            placeholder="Altura (m)"
            keyboardType="numeric"
            />
            <Text>Peso</Text>
            <TextInput
            onChangeText={setWeight}
            value={weight}
            placeholder="Peso (Kg)"
            keyboardType="numeric"
            />
            <Button 
            onPress={() => validationImc() }
            title="Calcular Imc"/>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
     </View>
    );
} 