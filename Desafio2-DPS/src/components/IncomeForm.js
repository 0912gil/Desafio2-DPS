import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IncomeSchema = Yup.object().shape({
  tipoIngreso: Yup.string().required('Tipo de ingreso es requerido'),
  monto: Yup.number().required('Monto es requerido').positive('Debe ser un número positivo'),
});

export default function IncomeForm() {
  return (
    <Formik
      initialValues={{ tipoIngreso: '', monto: '' }}
      validationSchema={IncomeSchema}
      onSubmit={async (values) => {
        try {
          const storedIncomes = await AsyncStorage.getItem('incomes');
          const incomes = storedIncomes ? JSON.parse(storedIncomes) : [];
          incomes.push(values);
          await AsyncStorage.setItem('incomes', JSON.stringify(incomes));
          alert('Ingreso guardado');
        } catch (error) {
          console.error('Error al guardar el ingreso', error);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.form}>
          <Text>Tipo de Ingreso:</Text>
          <input
            type="text"
            onChange={handleChange('tipoIngreso')}
            onBlur={handleBlur('tipoIngreso')}
            value={values.tipoIngreso}
          />
          {errors.tipoIngreso && <Text style={styles.error}>{errors.tipoIngreso}</Text>}

          <Text>Monto:</Text>
          <input
            type="number"
            onChange={handleChange('monto')}
            onBlur={handleBlur('monto')}
            value={values.monto}
          />
          {errors.monto && <Text style={styles.error}>{errors.monto}</Text>}

          <Button title="Guardar Ingreso" onPress={handleSubmit} />
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