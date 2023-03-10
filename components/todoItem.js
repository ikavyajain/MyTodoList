import React, { useState } from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Button} from 'react-native';
import AddTodo from './addTodo';

export default function TodoItem({ pressHandler,editHandler,item }) {
  const [text, setText] = useState("");
  const [isEditing, setEdit] = useState(false);

  const handleEdit = () => {
    editHandler(item.key, text); 
    setText('');
    setEdit(false);
  }

  const editItem = () => {
    setEdit(true);
  }

  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <View> 
          <Button title="Delete" onPress={() => pressHandler(item.key)} color='#B195D2'/>
          {isEditing 
            ? <Button title="Save" onPress={() => handleEdit()} color='#B195D2'/>
            : <Button title="Edit" onPress={() => editItem()} color='#B195D2'/>
          }
          
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});