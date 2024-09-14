import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FinanzasStack from './navigation/FinanzasStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Finanzas" component={FinanzasStack} />
        {/* Puedes agregar otros tabs aquí si es necesario */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
