import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import Navbar from '../components/navbar';

const StyledView = styled(View);
const StyledText = styled(Text);

const Calendar = () => {
  return (
    <StyledView>
      <Navbar />
      {/* Your Calendar content */}
    </StyledView>
  );
};

export default Calendar;
