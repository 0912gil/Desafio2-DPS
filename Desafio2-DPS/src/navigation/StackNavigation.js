import React from 'react';
import { createStackNavigation } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IncomeScreen from '../screens/IncomeScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import ComparisonScreen from '../screens/ComparisonScreen';

const Stack = createStackNavigation();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Income">
        <Stack.Screen name="Income" component={IncomeScreen} />
        <Stack.Screen name="Expenses" component={ExpensesScreen} />
        <Stack.Screen name="Comparison" component={ComparisonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;