import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ComparisonChart() {
  const [incomesTotal, setIncomesTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        // Recuperar ingresos y egresos almacenados
        const storedIncomes = await AsyncStorage.getItem('incomes');
        const storedExpenses = await AsyncStorage.getItem('expenses');

        // Calcular el total de ingresos y egresos
        const incomes = storedIncomes ? JSON.parse(storedIncomes) : [];
        const expenses = storedExpenses ? JSON.parse(storedExpenses) : [];

        const totalIncomes = incomes.reduce((sum, item) => sum + parseFloat(item.monto), 0);
        const totalExpenses = expenses.reduce((sum, item) => sum + parseFloat(item.monto), 0);

        setIncomesTotal(totalIncomes);
        setExpensesTotal(totalExpenses);
      } catch (error) {
        console.error('Error al recuperar los datos financieros', error);
      }
    };

    fetchFinancialData();
  }, []);

  // Datos para el gráfico de barras
  const data = {
    labels: ['Ingresos', 'Egresos'],
    datasets: [
      {
        data: [incomesTotal, expensesTotal],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comparación de Ingresos vs Egresos</Text>
      <BarChart
        data={data}
        width={Dimensions.get('window').width - 40} // Ancho del gráfico
        height={220}
        fromZero={true}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        verticalLabelRotation={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});