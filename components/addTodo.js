import React, { useState } from 'react';
import { Button, Text, StyleSheet, TextInput, View } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const submittedTodo = () => {
        submitHandler(text);
        setText('');
    }

    return (
        <View>
            <TextInput 
                placeholder='Add New Todo...'
                style={styles.input}
                onChangeText={changeHandler}
                editable={true}
                multiline={false}
                maxLength={200}
                value={text}
            />
            <Button onPress={submittedTodo} title='add todo' color='#B195D2' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})