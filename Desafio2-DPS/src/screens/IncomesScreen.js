import React from 'react';
import { View, Text, Button } from 'react-native';

function IncomesScreen({ navigation }) {
  return (
    <View>
      <Text>Pantalla de Ingresos</Text>
      <Button
        title="Ir a Egresos"
        onPress={() => navigation.navigate('ExpensesScreen')}
      />
    </View>
  );
}

export default IncomesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});