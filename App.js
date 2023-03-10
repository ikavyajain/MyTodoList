import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Workout', key: '1' },
    { text: 'Code', key: '2' },
    { text: 'Drink Water', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
    })
  }

  const editHandler = (key, newText) => {
    const editedTodoList = todos.map((todo) => {
        if (key === todo.key) {
          return {...todos, value: newText}
        }
        return todo;
      });
    setTodos(editedTodoList);
  };

  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* add todo form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem 
                  item={item} 
                  pressHandler={pressHandler} 
                  editHandler={editHandler}
                />
              )}
            />
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
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});