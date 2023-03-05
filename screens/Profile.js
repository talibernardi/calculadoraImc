import React from 'react';
import { View, Text, Button, TouchableOpacity } from "react-native"
import { StyleSheet } from 'react-native';


export function Profilescreen({ navigation }) {
  return (
    <View style={styles.formContext}>
      <Text style={styles.textImc}>Resultado</Text>
      <View style={styles.form}>
        <Text style={styles.description}>
          O cálculo de IMC não leva em consideração a composição corporal. Por esse motivo,
          pessoas com muita massa muscular, como é o caso de alguns atletas, podem apresentar
          um IMC acima do normal. O ideal é consultar um nutricionista para fazer uma avaliação
          mais detalhada.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonCalculator}
        onPress={() => navigation.navigate('Form')}>
        <Text style={styles.textbuttonCalculator}>Novo Cálculo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: "auto",
    marginTop: 20,
    padding: 10,
  },
  formContext: {
    marginTop: 50,
    elevation: 4,
    width: "87%",
    height: "90%",
    bottom: 0,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginLeft: 26,
    borderRadius: 8,
    paddingTop: 0,
  },
  description:{
    paddingTop: 20,
    color: "#A1B2CD",
    textAlign: 'center',
    paddingBottom: 30,
},
  textImc: {
    marginTop: 40,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#6CCB94",
    fontSize: 20,
  },
  formContext: {
    marginTop: 50,
    elevation: 4,
    width: "87%",
    height: "90%",
    bottom: 0,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginLeft: 26,
    borderRadius: 8,
    paddingTop: 0,
  },
  buttonCalculator: {
    elevation: 2,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#6CCB94",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 14,
    paddingTop: 14,
    marginLeft: 15,
    margin: 30,
  },
  textbuttonCalculator: {
    fontSize: 20,
    color: "#ffffff"
  },

})
