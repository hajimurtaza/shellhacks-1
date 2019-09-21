import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

const DisabledScreen = () => {
  let signed = false



  const initialUserState = {
    name: '',
  }

  const [ name, setName ] = useState(initialUserState);


  if(signed) {
    return ( 
      <View style={styles.container}>
        <Text>SIGNED</Text>
      </View>
     );
  } else {
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
          <TextInput
            style={styles.textInputContainer}
            name="name"
            maxLength={31}
            placeholder="Name"
            
          />
        
          <TouchableOpacity onPress={ e => {
            e.preventDefault();
            if(!this.state.card.name || !this.state.card.email) return
            this.props.addCard(this.state.card)
          }} style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'beige'
  },
  textInputContainer: {
    padding: 10,
    borderRadius: 3,
    height: 40, 
    borderWidth: 1, 
    borderColor: 'blue',
    marginBottom: 20, 
    marginHorizontal: 10
  },
  submitButton: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'blue',
    padding: 15,
    // margin: 5,
    marginHorizontal: 10
  },
  submitButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default DisabledScreen;