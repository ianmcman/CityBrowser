import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Linking, TouchableOpacity } from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button'

const Tab = createDrawerNavigator();
const artPic = require('./images/art.png');
const magMile = require('./images/mile.png');
const pier = require('./images/pier.png');
const waterTow = require('./images/water.png');
const willTower = require('./images/willis.png');

function handleButtonPress(link) {
  WebBrowser.openBrowserAsync(link);
}

function ArtInst() {
  return (
    <View style={styles.screenContainer}>
      <Image source={artPic} style={styles.picture}/>
        <Button info styles={styles.button} onPress={() => handleButtonPress('https://www.artic.edu/')}>
          More Information
        </Button>
    </View>
  );
}

function MagMile() {
  return (
    <View style={styles.screenContainer}>
      <Image source={magMile} style={styles.picture}/>
      <Button info styles={styles.button} onPress={() => handleButtonPress('https://www.themagnificentmile.com/')}>
          More Information
      </Button>
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.screenContainer}>
      <Image source={pier} style={styles.picture}/>
      <Button info styles={styles.button} onPress={() => handleButtonPress('https://navypier.org/')}>
          More Information
      </Button>      
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.screenContainer}>
      <Image source={waterTow} style={styles.picture}/>
      <Button info styles={styles.button} onPress={() => handleButtonPress('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')}>
          More Information
      </Button>
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.screenContainer}>
      <Image source={willTower} style={styles.picture}/>
      <Button info styles={styles.button} onPress={() => handleButtonPress('https://www.willistower.com/')}>
          More Information
      </Button>
    </View>
  );
}

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Art Institute of Chicago" component={ArtInst} />
        <Tab.Screen name="Magnificent Mile" component={MagMile} />
        <Tab.Screen name="Navy Pier" component={NavyPier} />
        <Tab.Screen name="Water Tower" component={WaterTower} />
        <Tab.Screen name="Willis Tower" component={WillisTower} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 240,
    height: 360,
    marginBottom: 10,
  },
  button: {
    margin: 10,
  },
});
