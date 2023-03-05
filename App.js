import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Profilescreen } from './screens/Profile';
import HomeScreen from './screens/Home';
import { Linking } from 'react-native';
import React from 'react';
import Form from './src/components/Form';

 export default function App() {
  return (
    <View style={styles.sectionContainer}>
      <View>
        <Image style={styles.imgBeHealthyLogo} source={require('./assets/Img/behealthy-logo.png')}
          onPress={() => { Linking.openURL('target_blank'); }} />
        </View>
     <View style={styles.positionLinkGit}>
        <Image style={styles.imgGitLogo} source={require('./assets/Img/git-logo.png')} />
        <Text
          style={styles.linkGit} onPress={() => 
                { Linking.openURL('https://github.com/talibernardi'); }}> @talibernardi
        </Text>
       </View>
      <MyStack />
    </View>
  )
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Form'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profilescreen} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    fontFamily: 'ubuntu',
    marginTop: 32,
    flex: 1,
  },
  imgBeHealthyLogo: {
    resizeMode: 'stretch',
    width: 250,
    height: 50,
    marginLeft: 20,
    marginTop: 30,
  },
  imgGitLogo: {
    resizeMode: 'stretch',
    marginLeft: 20,
    marginTop: 10,
    width: 30,
    height: 30,
  },
  linkGit: {
    paddingTop: 12,
    color: "#322153",
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  positionLinkGit: {
    flexDirection: 'row',
    flex: 1,
  },
});

