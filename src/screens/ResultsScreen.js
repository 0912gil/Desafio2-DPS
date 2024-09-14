import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ResultsScreen() {
  return (
    <View>
      <Text>Comparación de Ingresos vs Egresos</Text>
    </View>
  );
}

export default ResultsScreen;

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