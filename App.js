import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { HomeScreen } from './screens/Home';
import { Profilescreen } from './screens/Profile';
import Main from './src/components/Main';

export default function App() {
 return (
  <View style={styles.sectionContainer}>
    <Main/>
  </View>
 )
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profilescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    marginTop: 32,
  },
});