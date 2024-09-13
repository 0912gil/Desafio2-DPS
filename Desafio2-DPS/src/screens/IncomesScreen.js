import React from 'react';
import { View, Button } from 'react-native';
import IncomeForm from '../components/IncomeForm';

export default function IncomesScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <IncomeForm />
      <Button title="Continuar a Egresos" onPress={() => navigation.navigate('Expenses')} />
    </View>
  );
}