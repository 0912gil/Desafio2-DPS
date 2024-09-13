import React from 'react';
import { View, Button } from 'react-native';
import ExpenseForm from '../components/ExpenseForm';

export default function ExpensesScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ExpenseForm />
      <Button title="Ver Resultados" onPress={() => navigation.navigate('Results')} />
    </View>
  );
}