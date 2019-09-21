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


export default function SignInScreen() {

  signInAsDisable = async() => {
    await AsyncStorage.setItem('userToken', 'disabledPerson');
    this.props.navigation.navigate('needHelp')
  }

  return (
    <View style={styles.container}>
      <View style={styles.disableContainer}>
        <TouchableOpacity>
          <Text style={styles.touchText}>Disabled</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nonDisableContainer}>
        <TouchableOpacity>
          <Text style={styles.touchText}>Non Disabled</Text>
        </TouchableOpacity>
      </View>
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
