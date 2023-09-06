import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MealPlan from './src/pages/mealPlan';
import Calendar from './src/pages/Calendar';
import Profile from './src/pages/Profile';
import NutritionGuide from './src/pages/NutritionGuide';
import RecommendedMealPlan from './src/pages/RecommendedMealPlan';
import LanguagesPage from './src/pages/Languages';
import InstructionsPage from './src/pages/Instructions';
import AgePage from './src/pages/Age';
import DiseasesPage from './src/pages/Diseases';

const Stack = createNativeStackNavigator();

const foodChoicesForBreakfast = [
  {id: 1, name: 'Scrambled eggs with asparagus and tomatoes', stars: 4, price: '', unhealthy: '', image_uri:'https://www.sydneymarkets.com.au/recipes/images/asparagus-and-parmesan-scrambled-eggs.jpg', meal_time: 'breakfast'},
{id: 2, name: 'Greek yoghurt with mixed berries and chopped almonds', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.almonds.com/sites/default/files/2020-07/abc_BreakfastPairing_A_re01.jpg', meal_time: 'breakfast'},
{id: 3, name: 'Oatmeal pancakes with blueberries', stars: 4, price: 0, unhealthy: '', image_uri:'https://s23209.pcdn.co/wp-content/uploads/2012/10/IMG_6988-360x360.jpg', meal_time: 'breakfast'},
{id: 4, name: 'Greek yoghurt with mixed nuts, berries, and honey', stars: 4, price: 0, unhealthy: '', image_uri:'https://i0.wp.com/thedomesticdietitian.com/wp-content/uploads/2021/01/pomegranate-greek-yogurt-bowl-4.jpg?w=870&ssl=1', meal_time: 'breakfast'},
{id: 5, name: 'Porridge with shredded chicken', stars: 5, price: 0, unhealthy: '', image_uri:'https://www.theworktop.com/wp-content/uploads/2019/11/Chicken-Congee-Slow-Cooker.jpg', meal_time: 'breakfast'},
{id: 6, name: 'Kaya toast with soft-boiled eggs', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.seriouseats.com/thmb/TO4m30tEDM-ybj7rk0BPT7SE_Mg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__09__20140917-singapore-soft-eggs-kaya-toast-1-16ed35963ac446248a5749977e508fc9.jpg', meal_time: 'breakfast'},
{id: 7, name: 'Whole wheat pancakes with fresh fruit toppings', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Whole-Wheat-Pancakes-Recipe-1-1200.jpg', meal_time: 'breakfast'},
{id: 8, name: 'Scrambled eggs with cherry tomatoes', stars: 4, price: 0, unhealthy: '', image_uri:'https://images.eatthismuch.com/img/906301_tabitharwheeler_ed977b10-1407-4c8c-95b4-5cc414a1f618.jpg', meal_time: 'breakfast'},
{id: 9, name: 'Scrambled eggs with spinach', stars: 4, price: 0, unhealthy: '', image_uri:'https://images.eatthismuch.com/img/905630_elm333_5bceb318-0dc9-4d99-8a82-a92b3fa9e088.jpg', meal_time: 'breakfast'},
{id: 10, name: 'Scrambled eggs with bell peppers', stars: 4, price: 0, unhealthy: '', image_uri:'https://static01.nyt.com/images/2014/06/04/dining/04CHILE2/04JPCHILE2-articleLarge.jpg?w=1280&q=75', meal_time: 'breakfast'},
{id: 11, name: 'Oatmeal with chopped apples and cinnamon', stars: 3, price: 0, unhealthy: '', image_uri:'https://simple-veganista.com/wp-content/uploads/2016/03/healthy-apple-baked-oatmeal-recipe-14.jpg', meal_time: 'breakfast'},
{id: 12, name: 'Quinoa porridge with mixed fruits', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.simplyquinoa.com/wp-content/uploads/2020/01/ultimate-superfood-quinoa-porridge-7.webp', meal_time: 'breakfast'},
{id: 13, name: 'Whole wheat toast with poached/scrambled/fried eggs', stars: 3, price: 0, unhealthy: '', image_uri:'https://images.squarespace-cdn.com/content/v1/55f9c9abe4b09e993da5f156/1539174364166-TIQK5VFA6ANJ2G8X028L/image-asset.png?format=2500w', meal_time: 'breakfast'},
{id: 14, name: 'Porridge with shredded fish', stars: 5, price: 0, unhealthy: '', image_uri:'https://salu-salo.com/wp-content/uploads/2020/12/Fish-Congee-3.jpg.webp', meal_time: 'breakfast'},
{id: 15, name: 'Oatmeal with sliced bananas and walnuts', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.effortlessfoodie.com/wp-content/uploads/2022/03/banana-porridge-4-300x300.jpg', meal_time: 'breakfast'},
{id: 16, name: 'Scrambled eggs with bok choy', stars: 4, price: 0, unhealthy: '', image_uri:'https://www.abetterchoice.com.au/app/uploads/2021/07/Asian-Style-Scrambled-Eggs-800x520.jpg?x89200', meal_time: 'breakfast'},
{id: 17, name: 'Spinach and mushroom omelet', stars: 5, price: 0, unhealthy: '', image_uri:'https://www.exceedinglyvegan.com/vegan/thumbnails/mainimage/8814/9743/4249/vegan-egg-omelette.jpg', meal_time: 'breakfast'},
];

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
];

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
];

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


const App = () => {
  const [mealPlan, setMealPlan] = useState(null);

  useEffect(() => {
    // Generate random meal choices when the component mounts
    const foodChosenForBreakfast = getRandomItem(foodChoicesForBreakfast);
    const foodChosenForLunch = getRandomItem(foodChoicesForLunch);
    const foodChosenForDinner = getRandomItem(foodChoicesForDinner);

    // Create a meal plan object
    const newMealPlan = {
      breakfast: foodChosenForBreakfast,
      lunch: foodChosenForLunch,
      dinner: foodChosenForDinner,
    };

    // Save the meal plan in state
    setMealPlan(newMealPlan);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MealPlan">
      <Stack.Screen
          name="RecommendedMealPlan"
          component={RecommendedMealPlan}
          options={{ headerShown: false }}
          initialParams={{ mealPlan }} // Pass the meal plan as a prop
        />
        <Stack.Screen name="MealPlan" component={MealPlan} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="NutritionGuide" component={NutritionGuide} options={{ headerShown: false }} />
        <Stack.Screen name="Languages" component={LanguagesPage} options={{ headerShown: false }} />
        <Stack.Screen name="Instructions" component={InstructionsPage} />
        <Stack.Screen name="Age" component={AgePage} />
        <Stack.Screen name="Diseases" component={DiseasesPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
