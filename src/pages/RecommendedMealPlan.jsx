import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const RecommendedMealPlan = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { dayNumber } = route.params;

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
          </StyledView>
          <StyledView className="w-[292px] h-[394px] rounded-lg bg-[#C4E5F8] border border-gray-300">
            {/* Content for Lunch */}
          </StyledView>
          <StyledView className="w-[292px] h-[394px] rounded-lg bg-[#C4E5F8] border border-gray-300">
            {/* Content for Dinner */}
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
