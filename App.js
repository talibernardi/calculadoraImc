import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { HomeScreen } from './screens/Home';
import Main from './src/components/Main';

 function mystack() {
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}