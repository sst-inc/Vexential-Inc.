import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image, FlatList } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';


// Load your JSON data
const breakfastData = require('../utils/data/breakfastFood.json');
const lunchData = require('../utils/data/lunchFood.json');
const dinnerData = require('../utils/data/dinnerFood.json');


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);


const RecommendedMealPlan = ({ route }) => {
const navigation = useNavigation();
const { dayNumber, selectedDiseases } = route.params;


// Modify the navigateToMealInfo function to navigate to "MealInfo"
const navigateToMealInfo = (meal) => {
navigation.navigate('MealInfo', {
foodItem: meal, // Pass foodItem instead of meal
});
};


const [mealData, setMealData] = useState([]);


const chooseRandomFood = (foodChoices) => {
function getRandomItem(obj) {
const keys = Object.keys(obj);
const randomKey = keys[Math.floor(Math.random() * keys.length)];
return obj[randomKey];
}


const foodChosenForBreakfast = getRandomItem(foodChoices.breakfast);
const foodChosenForLunch = getRandomItem(foodChoices.lunch);
const foodChosenForDinner = getRandomItem(foodChoices.dinner);


const result = [
{
title: 'BREAKFAST',
meal: foodChosenForBreakfast,
},
{
title: 'LUNCH',
meal: foodChosenForLunch,
},
{
title: 'DINNER',
meal: foodChosenForDinner,
},
];


setMealData(result);
};


useEffect(() => {
if (mealData.length === 0) {
const diseaseIds = Object.values(selectedDiseases).map(
(disease) => disease.id
);


const filteredBreakfast = Object.values(breakfastData).filter((meal) =>
diseaseIds.includes(meal.disease)
);
const filteredLunch = Object.values(lunchData).filter((meal) =>
diseaseIds.includes(meal.disease)
);
const filteredDinner = Object.values(dinnerData).filter((meal) =>
diseaseIds.includes(meal.disease)
);


const filteredFoodChoices = {
breakfast: filteredBreakfast,
lunch: filteredLunch,
dinner: filteredDinner,
};


chooseRandomFood(filteredFoodChoices);
}
}, [mealData, breakfastData, lunchData, dinnerData, selectedDiseases]);


const renderItem = ({ item }) => (
<View style={{ width: 362.5, height: 500, borderRadius: 15, backgroundColor: '#C4E5F8', borderWidth: 1, borderColor: 'gray' }}>
<Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', padding: 16 }}>
{item.meal ? item.meal.name : `No ${item.title.toLowerCase()}`}
</Text>
{item.meal && (
<Image
source={{ uri: item.meal.image_uri }}
style={{ width: '100%', height: 200 }}
resizeMode="cover"
/>
)}
{/* Use onPress to navigate */}
<Pressable
onPress={() => navigateToMealInfo(item.meal)}
style={{ width: 100, height: 100, borderRadius: 8, backgroundColor: '#F5FAFE', borderWidth: 1, borderColor: '#00A3FF', position: 'absolute', bottom: 5, left: 5, justifyContent: 'center', alignItems: 'center' }}
>
<Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Details</Text>
</Pressable>
</View>
);


if (mealData.length === 0) {
return <Text>Loading...</Text>;
}


return (
<StyledView className="flex-1 flex-col bg-blue-100 p-0">
<StyledPressable
className="w-[142px] h-[50px] rounded-md bg-[#F5FAFE] border border-[#00A3FF] absolute top-5 left-5 flex justify-center items-center"
onPress={() => navigation.goBack()}
>
<StyledText className="text-black text-base font-semibold">
&lt; back
</StyledText>
</StyledPressable>


<StyledView className="flex-row justify-center items-center p-3">
<StyledText className="text-black text-5xl font-semibold">
Day {dayNumber}
</StyledText>
</StyledView>


<StyledView className="flex-row justify-center items-center p-1">
<StyledText className="text-black text-4xl font-semibold">
Recommended Meal Plan
</StyledText>
</StyledView>


<StyledView className="w-[1088px] h-[590px] bg-white m-3 mx-auto rounded-xl flex-col justify-start">
<FlatList
data={mealData}
renderItem={renderItem}
keyExtractor={(item, index) => index.toString()}
horizontal
/>


<StyledView className="w-[340px] h-[52px] rounded-full bg-[#146B9C] m-3 mx-auto flex justify-center items-center">
<StyledText className="text-white text-2xl font-semibold">
Are my meals balanced?
</StyledText>
</StyledView>
</StyledView>
</StyledView>
);
};


export default RecommendedMealPlan;
