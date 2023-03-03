import React from 'react';
import { View, Text, Button} from "react-native"

export function Profilescreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
        title="Profile"
        onPress={() => navigation.navigate('Profile')}></Button>
      </View>
    );
  }

  