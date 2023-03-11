import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Pressable,
    Keyboard,
} from "react-native"
import React, { useState } from "react"
import ResultImc from "./ResultImc"

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButtton, setTextButton] = useState("Calcular IMC")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        return setImc((weight / (heightFormat * heightFormat)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setErrorMessage(null)
            setTextButton("Novo Cálculo")
        }
        else {
            setImc(null)
            setTextButton("Calcular IMC")
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.textImc}>Calculadora de {'\n'} Imc</Text>
                    <Text style={styles.description}>
                        O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade.
                        É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setWeight}
                            value={weight}
                            placeholder="Peso (Kg)"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            autoFocus={true}
                            onChangeText={setHeight}
                            value={height}
                            placeholder="Altura (m)"
                            keyboardType="numeric"
                        />
                    </View>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc()
                        }}
                    >
                        <Text style={styles.textbuttonCalculator}>{textButtton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exhibitionResultImc}>
                    <Text style={styles.textResult}>Resultado</Text>
                    <ResultImc resultImc={imc}></ResultImc>
                    <Text style={styles.descriptionResult}>
                        O cálculo de IMC não leva em consideração a composição corporal. Por esse motivo,
                        pessoas com muita massa muscular, como é o caso de alguns atletas, podem apresentar
                        um IMC acima do normal. O ideal é consultar um nutricionista para fazer uma avaliação
                        mais detalhada.
                    </Text>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc()
                        }}
                    >
                        <Text style={styles.textbuttonCalculator}>{textButtton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    textImc: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#0D114F",
        fontSize: 30,
    },
    textResult: {
        marginTop: 40,
        marginBottom: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#6CCB94",
        fontSize: 20,
      },
    descriptionResult: {
        paddingTop: 3,
        color: "#A1B2CD",
        textAlign: 'center',
        paddingBottom: 30,
    },
    formContext: {
        elevation: 4,
        maxWidth: 345,
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginLeft: 26,
        borderRadius: 8,
        paddingTop: 0,
        marginTop: 80,
    },
    description: {
        paddingTop: 20,
        color: "#A1B2CD",
        textAlign: 'center',
        paddingBottom: 30,
      },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 20,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        marginLeft: 0,
        minWidth: 155,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#A1B2CD",
        height: 60,
        margin: 12,
        paddingLeft: 10,
    },
    inputContainer: {
        flexDirection: 'row',
    },
    buttonCalculator: {
        elevation: 2,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "#6CCB94",
        minWidth: 100,
        paddingBottom: 14,
        paddingTop: 14,
        margin: 30,
    },
    textbuttonCalculator: {
        fontSize: 20,
        color: "#ffffff"
    },
    exhibitionResultImc: {
        width: "93%",
        height: "65%",
        marginBottom: 25,
    },
    errorMessage: {
        fontSize: 12,
        fontWeight: "bold",
    },
});
