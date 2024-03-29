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
  SafeAreaView
} from 'react-native';
 

export default function HomeScreen(props) {


  signInAsDisable = async() => {
    props.navigation.navigate('DisabledScreen')
    
  }
  signInAsHelper = async() => {
    props.navigation.navigate('HelperScreen')
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.disableContainer}>
        <TouchableOpacity onPress={this.signInAsDisable}>
          <Text style={styles.touchText}>DISABLED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.helper}>
        <TouchableOpacity onPress={this.signInAsHelper}>
          <Text style={styles.touchText}>HELPER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
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