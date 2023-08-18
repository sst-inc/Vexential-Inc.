import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import Sidebar from '../components/Sidebar'

const StyledView = styled(View);
const StyledText = styled(Text);

const MealPlan = () => {
  const navigation = useNavigation();

  const startDate = new Date(2023, 6, 16);
  const dates = [...Array(7)].map((_, i) => {
    let date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  return (
    <StyledView className="flex-1 flex-row">
    {/* Sidebar */}
    <StyledView className="w-44 h-full bg-blue-200">
      <Sidebar />
    </StyledView>

      {/* Main Content */}
      <StyledView className="flex-1 flex-col justify-start items-center h-full bg-blue-100 p-0">
        {/* Title */}
        <StyledText className="text-black text-xl font-semibold mt-3">
          Meal Plan
        </StyledText>

        {/* Loop through the array of dates */}
        {dates.map((date, i) => (
          // Date Box
          <StyledView
            key={i}
            className={`flex-col w-100/10 h-8 rounded-full items-center justify-between mt-3 ${
              i === 0 ? 'bg-gray-400' : 'bg-blue-300'
            }`}
          >
            {/* Inner View for Day */}
            <StyledView className="w-full flex-row justify-start items-center px-5">
              <StyledText className="text-white text-sm font-normal">
                Day {i + 1}
              </StyledText>
            </StyledView>

            {/* Date */}
            <StyledText className="text-white text-lg font-normal">
              {`${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}`}
            </StyledText>
          </StyledView>
        ))}
      </StyledView>

      {/* StatusBar */}
      <StatusBar style="auto" />
    </StyledView>
  );
};

export default MealPlan;
