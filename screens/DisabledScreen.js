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

import axios from 'axios';

const endPoint = "http://10.110.184.209:5000/api/users/"

const DisabledScreen = () => {
  let signed = false



  const initialUserState = {
    name: '',
    password: ''
  }

  const [ name, setName ] = useState(initialUserState.name)
  const [ password, setPassword ] = useState('');

  const saveName = (name) => {

    fetch(endPoint)
      .then(res => res.json())
      .catch(err => console.log("An error occured...", err));
  //   try{
  //     const data ={username:name, password}
    
  //   // console.log(data)

  //  const resp = await axios.get(endPoint)

  //   console.log(resp);
  //   } catch(ex) {
  //     console.log(ex);
  //   }
    // setName(n.name)
  }

  const handleSubmit = e => {
    e.preventDefault()
    saveName(name)
    setName(initialUserState.name)
}

  

  if(signed) {
    return ( 
      <View style={styles.container}>
      </View>
     );
  } else {
    return (
      <View style={styles.container}>
      <Text>name</Text>
          <TextInput
            style={styles.textInputContainer}
            name="name"
            maxLength={31}
            placeholder="Name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <TextInput
            style={styles.textInputContainer}
            name="password"
            maxLength={31}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
        
          <TouchableOpacity onPress={ handleSubmit } style={styles.submitButton}
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