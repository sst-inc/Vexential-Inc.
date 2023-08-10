import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import Navbar from '../components/navbar';

const StyledView = styled(View);
const StyledText = styled(Text);

const NutritionGuide = () => {
  return (
    <StyledView>
      <Navbar />
      {/* Your Nutrition Guide content */}
    </StyledView>
  );
};

export default NutritionGuide;
