import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealPlan from './src/pages/mealPlan';
import Calendar from './src/pages/Calendar';
import Profile from './src/pages/Profile';
import NutritionGuide from './src/pages/NutritionGuide';
import RecommendedMealPlan from './src/pages/RecommendedMealPlan';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealPlan" component={MealPlan} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="NutritionGuide" component={NutritionGuide} options={{ headerShown: false }} />
        <Stack.Screen name="RecommendedMealPlan" component={RecommendedMealPlan} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
