import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import Sidebar from '../components/Sidebar'

const StyledView = styled(View);
const StyledText = styled(Text);

const NutritionGuide = () => {
  return (
    <StyledView>
      <Sidebar />
      {/* Your Nutrition Guide content */}
    </StyledView>
  );
};

export default NutritionGuide;
