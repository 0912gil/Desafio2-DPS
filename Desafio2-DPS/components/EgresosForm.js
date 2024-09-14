// components/EgresosForm.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import * as Yup from 'yup';

const tiposDeEgresos = [
  { label: 'Alquiler/Hipoteca', value: 'alquiler' },
  { label: 'Canasta Básica', value: 'canasta' },
  { label: 'Financiamientos', value: 'financiamientos' },
  { label: 'Transporte', value: 'transporte' },
  { label: 'Servicios Públicos', value: 'servicios' },
  { label: 'Salud y Seguro', value: 'salud' },
  { label: 'Egresos Varios', value: 'varios' },
];

const EgresosForm = ({ route, navigation }) => {
  const { ingresos } = route.params; // Recibe el valor de ingresos desde la navegación

  return (
    <Formik
      initialValues={{ tipo: '', monto: '' }}
      validationSchema={Yup.object({
        tipo: Yup.string().required('Selecciona un tipo de egreso'),
        monto: Yup.number().required('Ingresa un monto').positive('El monto debe ser positivo'),
      })}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate('Grafico', {
          ingresos: ingresos, // Pasa el valor de ingresos recibido
          egresos: values.monto,
        });
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text>Tipo de Egreso:</Text>
          <Picker
            selectedValue={values.tipo}
            onValueChange={handleChange('tipo')}
            style={styles.picker}
          >
            <Picker.Item label="Selecciona un tipo de egreso" value="" />
            {tiposDeEgresos.map((tipo) => (
              <Picker.Item key={tipo.value} label={tipo.label} value={tipo.value} />
            ))}
          </Picker>
          {touched.tipo && errors.tipo ? <Text style={styles.errorText}>{errors.tipo}</Text> : null}

          <Text>Monto:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={handleChange('monto')}
            value={values.monto}
          />
          {touched.monto && errors.monto ? <Text style={styles.errorText}>{errors.monto}</Text> : null}

          <Button title="Enviar" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default EgresosForm;
