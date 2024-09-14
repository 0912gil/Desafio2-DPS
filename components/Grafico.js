
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Grafico = ({ route, navigation }) => {
  const { ingresos, egresos } = route.params;

  const data = {
    labels: ['Ingresos', 'Egresos'],
    datasets: [
      {
        data: [parseFloat(ingresos), parseFloat(egresos)],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comparación de Ingresos vs Egresos</Text>
      <BarChart
        data={data}
        width={screenWidth - 32}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
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
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Button
        title="Ver Calificación y Productos"
        onPress={() => navigation.navigate('CalificacionYProductos', {
          ingresos: ingresos,
          egresos: egresos,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default Grafico;

