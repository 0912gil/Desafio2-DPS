import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ComparisonChart from '../components/ComparisonChart';

export default function ResultsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados</Text>
      <ComparisonChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});