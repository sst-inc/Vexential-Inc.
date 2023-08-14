import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';

const StyledView = styled(View);
const StyledText = styled(Text);

const NutritionGuide = () => {
  return (
    <StyledView>
      {/* Sidebar */}
<StyledView className="w-44 h-full bg-blue-200">
        <Sidebar />
      </StyledView>
    </StyledView>
  );
};

export default NutritionGuide;
