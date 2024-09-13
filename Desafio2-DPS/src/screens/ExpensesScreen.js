import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ExpensesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ingreso de Egresos</Text>
      {/* Aquí agregarías tu formulario de egresos */}
      <Button 
        title="Ver Resultados"
        onPress={() => navigation.navigate('ResultsScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});