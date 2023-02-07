import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Christy', id: '1'},
    { name: 'Yoshi', id: '2'},
    { name: 'Mario', id: '3'},
    { name: 'Luigi', id: '4'},
    { name: 'Peach', id: '5'},
    { name: 'Toad', id: '6'},
    { name: 'Bowser', id: '7'},
  ]);

  return (
    <View style={styles.container}>

    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({ item })=> (
        <Text style={styles.item}>{item.name}</Text>
      )}
    />

    {/* <ScrollView>
      {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
      ))}
    </ScrollView> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 5,
    width: 155
  }
});
