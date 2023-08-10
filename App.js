import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealPlan from './src/pages/mealPlan'; // Import your pages
import Calendar from './src/pages/Calendar'; // Import your pages
import Profile from './src/pages/Profile'; // Import your pages
import NutritionGuide from './src/pages/NutritionGuide'; // Import your pages

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealPlan" component={MealPlan} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="NutritionGuide" component={NutritionGuide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
