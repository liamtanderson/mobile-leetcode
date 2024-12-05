import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProblemDescription = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Two Sum Problem</Text>
      <Text style={styles.description}>
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
      </Text>
      <Button title="Start Solving" onPress={() => navigation.navigate('CodeEditor')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 40 },
});

export default ProblemDescription;
