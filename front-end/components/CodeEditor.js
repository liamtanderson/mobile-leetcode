import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { submitSolution } from '../services/api';

const CodeEditor = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    try {
      const result = await submitSolution(code);
      navigation.navigate('ResultsScreen', { result });
    } catch (error) {
      Alert.alert('Error', 'Failed to evaluate the code.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.editor}
        multiline
        placeholder="Write your Python solution here..."
        value={code}
        onChangeText={setCode}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  editor: { height: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 },
});

export default CodeEditor;
