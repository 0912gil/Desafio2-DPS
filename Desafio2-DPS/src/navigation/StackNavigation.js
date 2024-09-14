import 'react-native-gesture-handler'; 
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IncomesScreen from '../screens/IncomesScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import ResultsScreen from '../screens/ResultsScreen';

const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IncomesScreen">
        <Stack.Screen 
          name="IncomesScreen" 
          component={IncomesScreen} 
          options={{ title: 'Ingresos' }}
        />
        <Stack.Screen 
          name="ExpensesScreen" 
          component={ExpensesScreen} 
          options={{ title: 'Egresos' }}
        />
        <Stack.Screen 
          name="ResultsScreen" 
          component={ResultsScreen} 
          options={{ title: 'Comparación de Ingresos vs Egresos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigation;