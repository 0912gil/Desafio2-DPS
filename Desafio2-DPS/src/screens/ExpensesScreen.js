import React from 'react';
import { View, Text, Button } from 'react-native';

function ExpensesScreen({ navigation }) {
  return (
    <View>
      <Text>Pantalla de Egresos</Text>
      <Button
        title="Ver Comparación"
        onPress={() => navigation.navigate('ResultsScreen')}
      />
    </View>
  );
}

export default ExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});