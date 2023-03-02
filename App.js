import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Main from './src/components/Main';

export default function App() {
 return (
  <View style={styles.sectionContainer}>
    <Main/>
  </View>
 )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    marginTop: 32,
  },
});