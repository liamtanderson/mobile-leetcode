import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProblemDescription from '../components/ProblemDescription';
import CodeEditor from '../components/CodeEditor';
import ResultsScreen from '../components/ResultsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="ProblemDescription">
      <Stack.Screen name="ProblemDescription" component={ProblemDescription} />
      <Stack.Screen name="CodeEditor" component={CodeEditor} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
    </Stack.Navigator>
  );
}
