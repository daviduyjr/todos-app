import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/header';
import Content from './src/content';

export default function App() {
  const [todos, setTodos] = useState([
    { key: 1, todo: 'Complete task 1' },
    { key: 2, todo: 'Read a book' },
    { key: 3, todo: 'Go for a run' },
  ])
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <Content />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
