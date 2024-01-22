import React from 'react';
import 'intl-pluralrules';
import './i18n'; // Your i18n initial configuration file

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealPlan from './src/pages/mealPlan';
import Calendar from './src/pages/Calendar';
import Profile from './src/pages/Profile';
import NutritionGuide from './src/pages/NutritionGuide';
import RecommendedMealPlan from './src/pages/RecommendedMealPlan';
import LanguagesPage from './src/pages/Languages';
import InstructionsPage from './src/pages/Instructions';
import AgePage from './src/pages/Age';
import DiseasesPage from './src/pages/Diseases';
import MealInfo from './src/pages/MealInfo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Languages">
        <Stack.Screen
          name="RecommendedMealPlan"
          component={RecommendedMealPlan}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Diseases" component={DiseasesPage} />
        <Stack.Screen
          name="MealPlan"
          component={MealPlan}
          initialParams={{ selectedDiseases: [] }}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen
          name="NutritionGuide"
          component={NutritionGuide}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Languages"
          component={LanguagesPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Instructions" component={InstructionsPage} />
        <Stack.Screen name="Age" component={AgePage} />
        <Stack.Screen name="MealInfo" component={MealInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
