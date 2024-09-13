import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import IncomeForm from '../components/IncomeForm';

export default function IncomesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ingreso de Ingresos</Text>
      {/* Aquí agregarías tu formulario de ingresos */}
      <Button 
        title="Siguiente: Egresos"
        onPress={() => navigation.navigate('ExpensesScreen')}
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