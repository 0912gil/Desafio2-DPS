import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExpenseSchema = Yup.object().shape({
  tipoEgreso: Yup.string().required('Tipo de egreso es requerido'),
  monto: Yup.number().required('Monto es requerido').positive('Debe ser un número positivo'),
});

export default function ExpenseForm() {
  return (
    <Formik
      initialValues={{ tipoEgreso: '', monto: '' }}
      validationSchema={ExpenseSchema}
      onSubmit={async (values) => {
        try {
          const storedExpenses = await AsyncStorage.getItem('expenses');
          const expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
          expenses.push(values);
          await AsyncStorage.setItem('expenses', JSON.stringify(expenses));
          alert('Egreso guardado');
        } catch (error) {
          console.error('Error al guardar el egreso', error);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.form}>
          <Text>Tipo de Egreso:</Text>
          <input
            type="text"
            onChange={handleChange('tipoEgreso')}
            onBlur={handleBlur('tipoEgreso')}
            value={values.tipoEgreso}
          />
          {errors.tipoEgreso && <Text style={styles.error}>{errors.tipoEgreso}</Text>}

          <Text>Monto:</Text>
          <input
            type="number"
            onChange={handleChange('monto')}
            onBlur={handleBlur('monto')}
            value={values.monto}
          />
          {errors.monto && <Text style={styles.error}>{errors.monto}</Text>}

          <Button title="Guardar Egreso" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  error: {
    color: 'red',
  },
});