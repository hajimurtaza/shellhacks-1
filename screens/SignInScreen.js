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


export default function SignInScreen(props) {

  
  signInAsDisable = () => {

    // await AsyncStorage.setItem('userToken', 'disable');
    // props.navigation.navigate('DisabledScreen')
    console.log('sign disable');
    
  }
  signInAsHelper = () => {

    // await AsyncStorage.setItem('userToken', 'helper');
    // props.navigation.navigate('HelperScreen')
    console.log('sign helper');
    
  }

  
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
  );
}



SignInScreen.navigationOptions = {
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
