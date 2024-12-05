import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultsScreen = ({ route, navigation }) => {
  const { result } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Result</Text>
      <Text style={styles.result}>{result}</Text>
      <Button title="Solve Again" onPress={() => navigation.navigate('CodeEditor')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  result: { fontSize: 16, textAlign: 'center', marginBottom: 40 },
});

export default ResultsScreen;
