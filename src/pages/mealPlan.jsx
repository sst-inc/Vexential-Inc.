import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';
import Sidebar from '../components/Sidebar';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const date = new Date();
let currentDay = date.getDay()

const MealPlan = ({ route }) => {
  const navigation = useNavigation();
  const { dayNumber, selectedDiseases } = route.params;

  const navigateToRecommendedPlan = (dayNumber, selectedDiseases) => {
    navigation.navigate('RecommendedMealPlan', { dayNumber, selectedDiseases });
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <StyledView className="flex-1 flex-row bg-blue-100 items-center justify-start">
      {/* Sidebar */}
      <StyledView className="w-44 h-full bg-blue-200">
        <Sidebar selectedDiseases={selectedDiseases} />
      </StyledView>

      {/* Main Content */}
      <StyledView className="flex-1 flex-col justify-start items-center h-full bg-blue-100 p-0">
        {/* Title */}
        <StyledText className="flex text-black text-3xl font-semibold mt-3">Meal Plan</StyledText>

        {/* Loop through the days of the week */}
        {daysOfWeek.map((day, i) => (
          <StyledPressable
            key={i}
            className={`flex-col w-[1000] h-[85] rounded-full items-center justify-between mt-3 ${
              i === (currentDay) ? 'bg-gray-400' : 'bg-blue-300'
            }`}
            onPress={() => navigateToRecommendedPlan(i + 1, selectedDiseases)}
          >
            <StyledView className="w-full flex-row justify-center items-center px-5 text-center self-center">
              <StyledText key={i} className={`text-3xl font-normal self-center ${
              i === 0 ? 'text-white-200' : 'text-black-300'}`}>{day}</StyledText>
            </StyledView>
          </StyledPressable>
        ))}
      </StyledView>
    </StyledView>
  );
};

export default MealPlan;
