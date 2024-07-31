import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const TextInputExamples = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const addToList = () => {
      if (text.trim() !== '') {
        setList([...list, text]);
        setText('');
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={text}
          onChangeText={setText}
        />
        <Button title="Add" onPress={()=>{addToList()}} />
      </View>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
  listItem: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export default TextInputExamples;
