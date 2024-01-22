import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const MealPlan = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const date = new Date();
  let currentDay = date.getDay();

  const navigateToRecommendedPlan = (dayNumber, selectedDiseases) => {
    navigation.navigate('RecommendedMealPlan', { dayNumber, selectedDiseases });
  };

  const daysOfWeek = t('daysOfWeek', { returnObjects: true });

  return (
    <StyledView className="flex-1 flex-row bg-blue-100 items-center justify-start">
      {/* Sidebar */}
      <StyledView className="w-44 h-full bg-blue-200">
        {/* Pass necessary props to Sidebar if required */}
        <Sidebar />
      </StyledView>

      {/* Main Content */}
      <StyledView className="flex-1 flex-col justify-start items-center h-full bg-blue-100 p-0">
        {/* Title */}
        <StyledText className="flex text-black text-3xl font-semibold mt-3">
          {t('mealPlan.title')}
        </StyledText>

        {/* Loop through the days of the week */}
        {daysOfWeek.map((day, i) => (
          <StyledPressable
            key={i}
            className={`flex-col w-full h-20 rounded-full items-center justify-center mt-3 ${
              i === currentDay ? 'bg-blue-300' : 'bg-gray-400'
            }`}
            onPress={() => navigateToRecommendedPlan(i, {})} // Replace {} with the actual diseases object
          >
            <StyledText className={`text-2xl font-normal text-center ${i === currentDay ? 'text-white' : 'text-black'}`}>
              {day}
            </StyledText>
          </StyledPressable>
        ))}
      </StyledView>
    </StyledView>
  );
};

export default MealPlan;
