import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';

const foodChoicesForBreakfast = require('../utils/data/breakfastFood.json')
const foodChoicesForLunch = require('../utils/data/lunchFood.json')
const foodChoicesForDinner = require('../utils/data/dinnerFood.json')

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const RecommendedMealPlan = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { dayNumber } = route.params;
  const [data, setData] = useState([])

  const chooseRandomFood = (foodChoicesForBreakfast, foodChoicesForLunch, foodChoicesForDinner) => {
    function getRandomItem(arr) {
      const randomIndex = typeof arr == Array ? Math.floor(Math.random() * arr.length) : Math.floor(Math.random() * Object.keys(arr).length)
      return arr[randomIndex];
    }
    
    const foodChosenForBreakfast = getRandomItem(foodChoicesForBreakfast)
    const foodChosenForLunch = getRandomItem(foodChoicesForLunch)
    const foodChosenForDinner = getRandomItem(foodChoicesForDinner)

    const result = {
      breakfast: foodChosenForBreakfast,
      lunch: foodChosenForLunch,
      dinner: foodChosenForDinner
    }

    setData(result)
    console.log(result)
  }

  useEffect(() => {
    chooseRandomFood(foodChoicesForBreakfast, foodChoicesForLunch, foodChoicesForDinner)
  }, [])

  return (
    <StyledView className="flex-1 flex-col bg-blue-100 p-0">
      {/* Back Button */}
      <StyledPressable
        className="w-[142px] h-[50px] rounded-md bg-[#F5FAFE] border border-[#00A3FF] absolute top-5 left-5 flex justify-center items-center"
        onPress={() => navigation.goBack()}
      >
        <StyledText className="text-black text-base font-semibold">
          &lt; back
        </StyledText>
      </StyledPressable>

      {/* Day Text */}
      <StyledView className="flex-row justify-center items-center p-3">
        <StyledText className="text-black text-5xl font-semibold">
          Day {dayNumber}
        </StyledText>
      </StyledView>

      {/* Title */}
      <StyledView className="flex-row justify-center items-center p-1">
        <StyledText className="text-black text-4xl font-semibold">
          Recommended Meal Plan
        </StyledText>
      </StyledView>

      {/* White Box */}
      <StyledView className="w-[1088px] h-[590px] bg-white m-3 mx-auto rounded-xl flex-col justify-start">
        {/* Three Round Edge Boxes */}
        <StyledView className="flex-row justify-between items-start p-3 pl-10 pr-10">
          <StyledView className="w-[292px] h-[67px] rounded-full bg-[#48A3E4] flex justify-center items-center">
            <StyledText className="text-white text-3xl font-semibold">
              BREAKFAST
            </StyledText>
          </StyledView>
          <StyledView className="w-[292px] h-[67px] rounded-full bg-[#48A3E4] flex justify-center items-center">
            <StyledText className="text-white text-3xl font-semibold">
              LUNCH
            </StyledText>
          </StyledView>
          <StyledView className="w-[292px] h-[67px] rounded-full bg-[#48A3E4] flex justify-center items-center">
            <StyledText className="text-white text-3xl font-semibold">
              DINNER
            </StyledText>
          </StyledView>
        </StyledView>

        {/* Mealtime Boxes */}
        <StyledView className="flex-row justify-between items-start p-3 pl-10 pr-10">
          <StyledView className="w-[292px] h-[394px] rounded-lg bg-[#C4E5F8] border border-gray-300">
            {/* Content for Breakfast */}
            <StyledText className="text-black text-xl font-semibold p-4">
              {data.breakfast
                ? data.breakfast.name
                : 'No breakfast'}
            </StyledText>
            {data.breakfast && (
              <Image
                source={{ uri: data.breakfast.image_uri }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
              />
            )}
          </StyledView>
          <StyledView className="w-[292px] h-[394px] rounded-lg bg-[#C4E5F8] border border-gray-300">
            {/* Content for Lunch */}
            <StyledText className="text-black text-xl font-semibold p-4">
              {data.lunch ? data.lunch.name : 'No lunch'}
            </StyledText>
            {data.lunch && (
              <Image
                source={{ uri: data.lunch.image_uri }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
              />
            )}
          </StyledView>
          <StyledView className="w-[292px] h-[394px] rounded-lg bg-[#C4E5F8] border border-gray-300">
            {/* Content for Dinner */}
            <StyledText className="text-black text-xl font-semibold p-4">
              {data.dinner ? data.dinner.name : 'No dinner'}
            </StyledText>
            {data.dinner && (
              <Image
                source={{ uri: data.dinner.image_uri }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
              />
            )}
          </StyledView>
        </StyledView>
        {/* Rounded Box at the Bottom */}
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
