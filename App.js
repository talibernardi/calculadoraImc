import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Form from './src/components/Form';
import { Linking } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.sectionContainer}>
      <LayoutPage/>
      <Form/>
    </View>
  )
}

function LayoutPage() {
  return (
    <View>
      <Image style={styles.bgTop} source={require('./assets/Img/bg-top.png')}></Image>
      <View>
        <Image style={styles.imgBeHealthyLogo} source={require('./assets/Img/behealthy-logo.png')}/>
      </View>
      <View style={styles.positionLinkGit}>
        <Image style={styles.imgGitLogo} source={require('./assets/Img/git-logo.png')} />
        <Text
          style={styles.linkGit} onPress={() => { Linking.openURL('https://github.com/talibernardi'); }}> @talibernardi
        </Text>
      </View>
      <View>
        <Image style={styles.bgBottom} source={require('./assets/Img/bottom-corner.png')}></Image>
      </View>
    </View>
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
    marginTop: -10,
    marginBottom: 50,
  },
  imgGitLogo: {
    resizeMode: 'stretch',
    marginLeft: 20,
    marginTop: 60,
    width: 30,
    height: 30,
  },
  bgBottom: {
    position: 'absolute',
    resizeMode: 'stretch',
    width: 150,
    height: 50,
    marginTop: 600,
    marginLeft: -50,
  },
  linkGit: {
    paddingTop: 60,
    color: "#322153",
    fontWeight: 'bold',
    paddingLeft: 60,
    position: 'absolute',
  },
  positionLinkGit: {
    flexDirection: 'row',
    position: 'absolute',
  },
  bgTop: {
    position: 'absolute',
    resizeMode: 'stretch',
    width: 150,
    height: 550,
    marginTop: -35,
    marginLeft: 250,
  },
});



