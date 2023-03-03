import React from 'react';
import { View, Text, Button} from "react-native"

export function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
        title="home"
        onPress={() => navigation.navigate('Home')}></Button>
         <Button 
        title="Profile"
        onPress={() => navigation.navigate('Profile')}></Button>
      </View>
    );
  }

