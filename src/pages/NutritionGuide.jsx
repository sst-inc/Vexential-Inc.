import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import Sidebar from '../components/Sidebar';
import { useRoute } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);

const NutritionGuide = () => {
  const route = useRoute(); // Use useRoute to access route parameters

  // Access selectedDiseases from route.params
  const selectedDiseases = route.params?.selectedDiseases || [];

  // Function to generate content based on selected diseases
  const generateContent = () => {
    return selectedDiseases.map((disease) => {
      switch (disease.id) {
        case 'diabetes':
          return (
            <View key={disease.id}>
              <StyledText className="text-black text-base font-semibold">{disease.name}</StyledText>
              <StyledText>
                What is Diabetes?
                {/* Add your diabetes content here */}
              </StyledText>
              {/* Add the rest of the content for diabetes */}
            </View>
          );
        case 'highBloodPressure':
          return (
            <View key={disease.id}>
              <StyledText className="text-black text-base font-semibold">{disease.name}</StyledText>
              <StyledText>
                What is High Blood Pressure (Hypertension)?
                {/* Add your high blood pressure content here */}
              </StyledText>
              {/* Add the rest of the content for high blood pressure */}
            </View>
          );
        // Add cases for other diseases if needed
        default:
          return null; // Return null for unsupported diseases
      }
    });
  };

  return (
    <StyledView className="flex-1 flex-row">
      {/* Sidebar */}
      <StyledView className="w-44 h-full bg-blue-200">
        <Sidebar />
      </StyledView>

      {/* Main Content */}
      <StyledView className="flex-1 flex-col bg-blue-100 p-0">
        {/* Title */}
        <StyledView className="flex-row justify-center items-center p-4">
          <StyledText className="text-black text-4xl font-semibold">Nutrition Guide</StyledText>
        </StyledView>

        {/* Boxes */}
        <StyledView className="flex-col justify-center items-center">
          <StyledView className="w-[1000] h-[70] rounded-2xl bg-[#48A3E4] m-1 border border-gray-400 flex justify-center items-center">
            <StyledText className="text-white text-base font-semibold">Monthly Report</StyledText>
          </StyledView>
          <StyledView className="w-[1000] h-[70] rounded-2xl bg-[#E85151] m-1 border border-gray-400 flex justify-center items-center">
            <StyledText className="text-white text-base font-semibold">What to AVOID eating</StyledText>
          </StyledView>
        </StyledView>

        {/* YOUR NUTRITION GUIDE */}
        <StyledView className="flex-row justify-center items-center p-10">
          <StyledText className="text-black text-3xl font-semibold">YOUR NUTRITION GUIDE</StyledText>
        </StyledView>

        {/* Guide Text */}
        <ScrollView className="flex-1 p-0">
          {/* Generate content based on selected diseases */}
          {generateContent()}
        </ScrollView>
      </StyledView>
    </StyledView>
  );
};

export default NutritionGuide;
