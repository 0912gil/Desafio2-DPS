import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalificacionYProductos = ({ route }) => {
  const { ingresos, egresos } = route.params;

  // Función para calcular la calificación y productos
  const calcularCalificacion = () => {
    // Calcular la disponibilidad
    const disponibilidad = ((ingresos - egresos) / ingresos) * 100;

    // Determinar la calificación y los productos a ofrecer
    let calificacion = '';
    let productos = [];

    if (egresos > ingresos) {
      calificacion = 'Muy Alta';
      productos = ['Consolidación de Deudas', 'Asesor Financiero'];
    } else if (ingresos <= 360) {
      calificacion = 'Alta';
      productos = ['Apertura de Cuenta'];
    } else if (ingresos > 360 && ingresos <= 700) {
      calificacion = disponibilidad < 40 ? 'Alta' : 'Suficiente';
      productos = disponibilidad < 40
        ? ['Apertura de Cuenta']
        : ['Apertura de Cuenta', 'Tarjeta de Crédito Clásica', 'Crédito Personal hasta $2,000'];
    } else if (ingresos > 700 && ingresos <= 1200) {
      if (disponibilidad < 20) {
        calificacion = 'Alta';
        productos = ['Apertura de Cuenta'];
      } else if (disponibilidad >= 20 && disponibilidad <= 40) {
        calificacion = 'Suficiente';
        productos = ['Apertura de Cuenta', 'Tarjeta de Crédito Clásica'];
      } else {
        calificacion = 'Buena';
        productos = ['Apertura de Cuenta', 'Tarjeta de Crédito Clásica', 'Tarjeta de Crédito Oro', 'Crédito Personal hasta $8,000'];
      }
    } else if (ingresos > 1200 && ingresos <= 3000) {
      if (disponibilidad < 20) {
        calificacion = 'Suficiente';
        productos = ['Apertura de Cuenta', 'Tarjeta de Crédito Clásica'];
      } else if (disponibilidad >= 20 && disponibilidad <= 40) {
        calificacion = 'Buena';
        productos = ['Apertura de Cuenta', 'Tarjeta de Crédito Clásica', 'Tarjeta de Crédito Oro'];
      } else {
        calificacion = 'Muy Buena';
        productos = ['Apertura de Cuenta', 'Tarjeta de Crédito Clásica', 'Tarjeta de Crédito Oro', 'Tarjeta de Crédito Platinum', 'Crédito Personal hasta $25,000'];
      }
    } else if (ingresos > 3000) {
      if (disponibilidad < 20) {
        calificacion = 'Buena';
        productos = ['Apertura de Cuenta', 'Tarjeta de Crédito Clásica'];
      } else if (disponibilidad >= 20 && disponibilidad < 30) {
        calificacion = 'Muy Buena';
        productos = ['Apertura de Cuenta', 'Tarjeta de Crédito Clásica', 'Tarjeta de Crédito Oro', 'Tarjeta de Crédito Platinum'];
      } else {
        calificacion = 'Excelente';
        productos = ['Apertura de Cuenta', 'Tarjeta de Crédito Clásica', 'Tarjeta de Crédito Oro', 'Tarjeta de Crédito Platinum', 'Tarjeta de Crédito Black', 'Crédito Personal hasta $50,000'];
      }
    }

    return { calificacion, productos };
  };

  const { calificacion, productos } = calcularCalificacion();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calificación de Riesgo: {calificacion}</Text>
      <Text style={styles.text}>Productos Ofrecidos:</Text>
      {productos.map((producto, index) => (
        <Text key={index} style={styles.producto}>- {producto}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  producto: {
    fontSize: 16,
  },
});

export default CalificacionYProductos;
