import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';
 

export default function SplashScreen() {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        5000
      )
    )
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
        this.props.navigation.navigate('HomeScreen');
        }
        }
       catch(ex) {
        console.log(ex)
      }
    }
    getData()
  }, []);
  

  return (
    <View style={styles.container}>
      
    </View>
  );
}

SplashScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  disableContainer: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 3,
  },
  nonDisableContainer: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 3,
  },
  touchText: {
    fontWeight: 'bold',
    fontSize: 30
  }
});
