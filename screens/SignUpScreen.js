import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';


export default function SignUpScreen(props) {

  
  signInAsDisable = async() => {

    await AsyncStorage.setItem('userToken', 'disable');
    props.navigation.navigate('DisabledScreen')
    
  }
  signInAsHelper = async() => {

    await AsyncStorage.setItem('userToken', 'helper');
    props.navigation.navigate('HelperScreen')
    
  }

  
  return (
    <View style={styles.container}>
      <Text>SIGN UP SCREEN</Text>
    </View>
  );
}



SignUpScreen.navigationOptions = {
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
  helper: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 3,
  },
  touchText: {
    fontWeight: 'bold',
    fontSize: 30
  }
});
