import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//pages
import MealPlan from './src/pages/mealPlan';
// import Calendar from 'LB_Food_App/src/pages/calendar.jsx';
import './global.css'

const Stack = createNativeStackNavigator();

const App = () => {
  const startDate = new Date(2023, 6, 16); // Month is 0-indexed
  const dates = [...Array(7)].map((_, i) => {
    let date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="mealPlan"
            component={MealPlan}
          />
            {/* <Stack.Screen name="Calendar" component={Calendar}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


