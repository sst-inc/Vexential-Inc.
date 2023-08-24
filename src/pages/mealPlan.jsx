import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import Sidebar from '../components/Sidebar';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const MealPlan = () => {
  const navigation = useNavigation();

  // Function to navigate with day number parameter
  const navigateToRecommendedPlan = (dayNumber) => {
    navigation.navigate('RecommendedMealPlan', { dayNumber });
  };

  const startDate = new Date(2023, 6, 16);
  const dates = [...Array(7)].map((_, i) => {
    let date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  return (
    <StyledView className="flex-1 flex-row bg-blue-100 items-center justify-start">
      {/* Sidebar */}
      <StyledView className="w-44 h-full bg-blue-200">
        <Sidebar />
      </StyledView>

      {/* Main Content */}
      <StyledView className="flex-1 flex-col justify-start items-center h-full bg-blue-100 p-0">
        {/* Title */}
        <StyledText className="flex text-black text-3xl font-semibold mt-3">
          Meal Plan
        </StyledText>

        {/* Loop through the array of dates */}
        {dates.map((date, i) => (
          <StyledPressable
            key={i}
            className={`flex-col w-[1000] h-[85] rounded-full items-center justify-between mt-3 ${
              i === 0 ? 'bg-gray-400' : 'bg-blue-300'
            }`}
            onPress={() => navigateToRecommendedPlan(i + 1)} // Passing day number as parameter
          >
            <StyledView className="w-full flex-row justify-start items-center px-5">
              <StyledText className="text-white text-base font-normal">
                Day {i + 1}
              </StyledText>
            </StyledView>
            <StyledText className="text-white text-xl font-normal">
              {`${date.getDate()} ${date.toLocaleString('default', {
                month: 'long',
              })}`}
            </StyledText>
          </StyledPressable>
        ))}

        {/* StatusBar */}
        <StatusBar style="auto" />
      </StyledView>
    </StyledView>
  );
};

export default MealPlan;
