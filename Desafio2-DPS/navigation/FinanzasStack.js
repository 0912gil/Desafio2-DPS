// navigation/FinanzasStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IngresosForm from '../components/IngresosForm';
import EgresosForm from '../components/EgresosForm';
import Grafico from '../components/Grafico';
import CalificacionYProductos from '../components/CalificacionyProductos';


const Stack = createStackNavigator();

const FinanzasStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ingresos" component={IngresosForm} />
      <Stack.Screen name="Egresos" component={EgresosForm} />
      <Stack.Screen name="Grafico" component={Grafico} />
      <Stack.Screen name="CalificacionYProductos" component={CalificacionYProductos} />
     </Stack.Navigator>
  );
};

export default FinanzasStack;
