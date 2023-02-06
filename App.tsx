import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Christy');
  const [age, setAge] = useState('31');



  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput
        multiline
        style={styles.input} 
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}/>
      <Text>Enter Age</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input} 
        placeholder='e.g. 30'
        onChangeText={(val) => setAge(val)}/>
      <Text>My name is {name}</Text>
      <Text>I am {age} years old</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200
  }
});
