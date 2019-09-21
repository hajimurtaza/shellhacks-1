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
  StyleSheet,
} from 'react-native';

const DisabledScreen = () => {
  return ( 
    <View>
      <Text>DISABLED</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
})

 
export default DisabledScreen;