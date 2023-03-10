import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#B195D2',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  }
});