import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MealPlan from './src/pages/mealPlan';
import Calendar from './src/pages/Calendar';
import Profile from './src/pages/Profile';
import NutritionGuide from './src/pages/NutritionGuide';
import RecommendedMealPlan from './src/pages/RecommendedMealPlan';

const Stack = createNativeStackNavigator();

const foodChoicesForBreakfast = [
  {id: '1', name: 'Scrambled eggs with asparagus and tomatoes', stars: '4', price: '', unhealthy: '', image:''},
  {id: '2', name: 'Spinach and mushroom omelette', stars: '5', price: '', unhealthy: '', image:''},
  {id: '3', name: 'Greek yoghurt with mixed berries and chopped almonds', stars: '3', price: '', unhealthy: '', image:''},
  ]

const foodChoicesForLunch = [
  {id: '1', name: 'Grilled fish and green beans with brown rice', stars: '5', price: '', unhealthy: '', image: ''},
  {id: '2', name: 'Lentil and bell pepper stir-fry with tofu', stars: '4', price: '', unhealthy: ''},
  {id: '3', name: 'Chicken and asparagus salad with black beans', stars: '3', price: '', unhealthy: ''},
  {id: '4', name: '', stars: '4', price: '', unhealthy: ''},
  {id: '5', name: '', stars: '4', price: '', unhealthy: ''},
  {id: '6', name: '', stars: '4', price: '', unhealthy: ''},
]

const foodChoicesForDinner = [
  {id: '1', name: 'Chickpea and chicken salad with spinach', stars: '3', price: '', unhealthy: ''},
  {id: '2', name: 'Bok choy and tofu stir-fry with brown rice', stars: '3', price: '', unhealthy: ''},
  {id: '3', name: 'Bell pepper stuffed with lentils and grilled chicken', stars: '5', price: '', unhealthy: ''},
  {id: '4', name: '', stars: '3', price: '', unhealthy: ''},
  {id: '5', name: '', stars: '3', price: '', unhealthy: ''},
]

{/* function to get random foodchoice */}
function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const foodChosenForBreakfast = getRandomItem(foodChoicesForBreakfast)
const foodChosenForLunch = getRandomItem(foodChoicesForLunch)
const foodChosenForDinner = getRandomItem(foodChoicesForDinner)

console.log(foodChosenForBreakfast.name)
console.log(foodChosenForLunch.name)
console.log(foodChosenForDinner.name)

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
