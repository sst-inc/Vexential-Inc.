import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
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
const [showStartupPages, setShowStartupPages] = useState(true); // Initialize to true initially


useEffect(() => {
// Check if startup pages should be shown based on AsyncStorage
AsyncStorage.getItem('startupPagesShown').then((value) => {
if (value === 'true') {
setShowStartupPages(false);
}
});
}, []);


return (
<NavigationContainer>
<Stack.Navigator initialRouteName={showStartupPages ? 'Languages' : 'MealPlan'}>
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
<Stack.Screen name="NutritionGuide" component={NutritionGuide} options={{ headerShown: false }} />
{showStartupPages && (
<>
<Stack.Screen name="Languages" component={LanguagesPage} options={{ headerShown: false }} />
<Stack.Screen name="Instructions" component={InstructionsPage} />
<Stack.Screen name="Age" component={AgePage} />
</>
)}
<Stack.Screen name="MealInfo" component ={MealInfo} />
</Stack.Navigator>
</NavigationContainer>
);
};


export default App;
