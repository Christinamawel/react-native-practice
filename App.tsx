import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header.js';
import TodoItem from './components/TodoItem.js';
import AddTodo from './components/addTodo.js';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'clean kitchen', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'apply for jobs', key: '3'},
    { text: 'exercise', key: '4'}
  ])

  const pressHandler = (key: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo: {text: string, key: string; }) => todo.key != key);
    })
  }

  const submitHandler = (text: string) => {

    if(text.length > 2) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { text: text, key: Math.random().toString() }
        ]
      })
    } else {
      Alert.alert('OOPS!', 'to dos must be over 2 chars long.', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar backgroundColor='#bd5d3a' style="light" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content : {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
