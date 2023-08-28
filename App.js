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
  {id: 1, name: 'Scrambled eggs with asparagus and tomatoes', stars: 4, price: '', unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 2, name: 'Spinach and mushroom omelette', stars: 5, price: '', unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 3, name: 'Greek yoghurt with mixed berries and chopped almonds', stars: 3, price: 0, unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 4, name: '', stars: 4, price: 0, unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 5, name: '', stars: 4, price: 0, unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 6, name: '', stars: 4, price: 0, unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 7, name: '', stars: 4, price: 0, unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 8, name: '', stars: 4, price: 0, unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 9, name: '', stars: 4, price: 0, unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 10, name: '', stars: 4, price: 0, unhealthy: '', image_uri:'', meal_time: 'breakfast'},
  {id: 11, name: '', stars: 4, price: 0, unhealthy: '', image_uri:'', meal_time: 'breakfast'},

  ]

const foodChoicesForLunch = [
  {id: 1, name: 'Grilled fish and green beans with brown rice', stars: 5, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 2, name: 'Lentil and bell pepper stir-fry with tofu', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 3, name: 'Chicken and asparagus salad with black beans', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 4, name: '', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 5, name: '', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 6, name: '', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 7, name: '', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 8, name: '', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 9, name: '', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 10, name: '', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 11, name: '', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
  {id: 12, name: '', stars: 4, price: 0, unhealthy: '', image_uri: '', meal_time: 'lunch'},
]

const foodChoicesForDinner = [
  {id: 1, name: 'Chickpea and chicken salad with spinach', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
  {id: 2, name: 'Bok choy and tofu stir-fry with brown rice', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
  {id: 3, name: 'Bell pepper stuffed with lentils and grilled chicken', stars: 5, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
  {id: 4, name: '', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
  {id: 5, name: '', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
  {id: 6, name: '', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
  {id: 7, name: '', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
  {id: 8, name: '', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
  {id: 9, name: '', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
  {id: 10, name: '', stars: 3, price: 0, unhealthy: '', image_uri: '', meal_time: 'dinner'},
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
