import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigation } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import IncomesScreen from './src/screens/IncomesScreen';
import ExpensesScreen from './src/screens/ExpensesScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import StackNavigation from './src/navigation/StackNavigation';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigation();

function FinancialNavigator() {
  return (
    <Stack.Navigator initialRouteName="Incomes">
      <Stack.Screen name="Incomes" component={IncomesScreen} />
      <Stack.Screen name="Expenses" component={ExpensesScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Financial Analysis" component={FinancialNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  return <StackNavigation />;
}

