import { View, Text, TextInput, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButtton, setTextButton] = useState("Calcular IMC")

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setTextButton("Limpar campos")
            return
        }
        setImc(null)
        setTextButton("Calcular")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.textImc}>Calculadora de {'\n'} Imc</Text>
                <Text style={styles.description}>
                    O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade.
                    É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
                </Text>
                <View style={styles.inputGrid}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Peso (Kg)"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Altura (m)"
                        keyboardType="numeric"
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={styles.textbuttonCalculator}>{textButtton}</Text>
                </TouchableOpacity>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
            </View>
        </View>
    );
} 