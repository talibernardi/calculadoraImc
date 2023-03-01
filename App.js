import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';

export default function App() {
 return (
  <View style={styles.sectionContainer}>
    <Title/>
    <Main/>
  </View>
 )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

